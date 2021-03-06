/*
 * File: index.tsx
 * Description: 面包屑导航
 * File Created: 2020-09-27 13:57:41
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-11-19 14:40:36
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react'
import { Breadcrumb } from 'antd'
import './index.less'
import { Link } from 'umi'
interface BreadcrumbItem {
    title?: string
    icon?: any
    path?: string
    render?: any
    onclick?: Function
}
interface BreadcrumbNmgProps {
    crumbData: BreadcrumbItem[]
    separator?: string | React.ReactNode
}
/**
 *
 * @class 面包屑导航
 */
const BreadcrumbNmg: React.FC<BreadcrumbNmgProps> = props => {
    const { crumbData, separator = '/' } = props
    return (
        <Breadcrumb separator={separator} className={'crumb-root'}>
            {crumbData.map((item: BreadcrumbItem, i: number) => {
                return (
                    <Breadcrumb.Item
                        onClick={() => {
                            item.onclick && item.onclick()
                        }}
                        key={i}
                    >
                        {item.icon && item.icon}
                        {item.render ? (
                            item.render()
                        ) : item.path ? (
                            <Link style={{ color: '#237be9' }} to={item.path}>
                                {item.title}
                            </Link>
                        ) : (
                            item.title
                        )}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

export default BreadcrumbNmg
