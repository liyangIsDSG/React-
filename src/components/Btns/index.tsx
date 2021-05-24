/*
 * File: index.tsx
 * Description: 操作按钮
 * File Created: 2020-11-11 16:40:03
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-11-19 14:40:59
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import classnames from 'classnames'
import styles from './index.less'

interface IBtns extends ButtonProps {
    title?: string
    icon?: any
    click?: Function
    render?: any
}

interface IBtnsProps {
    btns: IBtns[]
}
/**
 *
 * @class 操作按钮
 */
const Btns: React.FC<IBtnsProps> = props => {
    const { btns } = props
    const renderBtn = (btn: IBtns, i: number) => {
        const { title, className, render, ...restBtn } = btn
        return render ? (
            render()
        ) : (
            <Button
                className={classnames(className, styles.btn)}
                key={i}
                type="primary"
                {...restBtn}
            >
                {title}
            </Button>
        )
    }
    return (
        <div className={styles.btns_root}>
            {btns.map((btn: IBtns, i: number) => {
                return renderBtn(btn, i)
            })}
        </div>
    )
}

export default Btns
