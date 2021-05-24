/*
 * File: index.tsx
 * Description: 查看原图
 * File Created: 2020-11-19 13:59:00
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-11-19 14:39:48
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
interface NMGProps {
    imgSrc?: string
    style?: React.CSSProperties
}
/**
 *
 * @class 图片原图组件
 */
const NMG: React.FC<NMGProps> = props => {
    const { imgSrc, style } = props
    const [previewVisible, setPreviewVisible] = useState<boolean>(false)
    const [previewImage, setPreviewImage] = useState<string>('')
    const handleCancel = () => {
        setPreviewVisible(false)
    }
    useEffect(() => {
        imgSrc && setPreviewImage(imgSrc)
    }, [imgSrc])
    return (
        <div>
            <div
                onClick={() => {
                    setPreviewVisible(true)
                }}
            >
                <img src={imgSrc} style={{ width: '50px', height: '50px', ...style }} />
            </div>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img style={{ width: '100%' }} src={previewImage} alt="图片" />
            </Modal>
        </div>
    )
}

export default NMG
