/*
 * File: index.tsx
 * Description: 描述
 * File Created: 2020-11-26 08:40:38
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-11-26 08:55:33
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import ProTable from '@ant-design/pro-table';
// import Column from 'rc-table/lib/sugar/Column';
import React from 'react';
interface NMGProps {}

// 定义表头, dataindex为json数据中的key值
const columns = [
  {
    title:'序号',
    dataIndex:'name'
  },
  {
    title:'角色',
    dataIndex:'name1'
  },
  {
    title:'角色描述',
    dataIndex:'name2'
  },
  {
    title:'用户列表',
    dataIndex:'name3'
  },
  {
    title:'操作',
    dataIndex:'name4'
  },
]

const NMG: React.FC<NMGProps> = (props) => {
  return <div>
    <ProTable 
      // headerTitle='查询表'
      columns={columns}
      request={(params) => queryTableData(params)}
    />
  </div>;
};


export default NMG;
