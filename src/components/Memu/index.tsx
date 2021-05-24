import React from 'react'
import { Menu } from 'antd'

interface MenuItem {
    key: string | number
    name: string
    icon?: any
    render?: () => any
}

interface NMGProps {
    menuArry: MenuItem[]
    mode: 'horizontal' | 'vertical' | 'vertical-left' | 'vertical-right' | 'inline' | undefined
}
const NMG: React.FC<NMGProps> = props => {
    const { menuArry, mode = 'horizontal' } = props
    return (
        <div>
            <Menu mode={mode}>
                {menuArry?.map((Item: any, i: number) => {
                    ;<Menu.Item key={Item.key || Item.name} disabled icon={<Item.icon />}>
                        {Item.render ? Item.render() : Item.name}
                    </Menu.Item>
                })}
            </Menu>
        </div>
    )
}

export default NMG
