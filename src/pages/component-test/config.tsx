/*
 * File: config.tsx
 * Description: 描述
 * File Created: 2020-11-26 19:59:56
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 13:35:41
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import { getCityData, getCompanies } from './services';
import { ORG_TYPE } from './constants';

export const tempBody = (callback?: any) => ({
  fields: [
    {
      label: '所属地区',
      fieldType: 'picker',
      name: 'domicile',
      width: '100%',
      fields: [
        {
          name: 'group_select1',
          type: 'GroupSelect',
          noPramas: true,
          connectKey: ['group_select2', 'group_select3', 'group_select4'],
          style: { width: '23%', marginRight: '10px' },
          fetchApi: (...args: any) =>
            getCityData.apply(null, args).then((res: any) => {
              return res.map((v: any) => ({
                key: v.key.toString(),
                value: v.value.toString(),
              }));
            }),
          apiParamsCb: (value: string | number) => ({}),
          label: '省',
          required: true,
        },
        {
          name: 'group_select2',
          type: 'GroupSelect',
          label: '市',
          searchKey: 'group_select1',
          connectKey: ['group_select3', 'group_select4'],
          fetchApi: (...args: any) =>
            getCompanies.apply(null, args).then((res: any) => {
              return res.map((v: any) => ({
                key: v.key.toString() + 'yang',
                value: v.value.toString() + 'yang',
              }));
            }),
          style: { width: '23%', marginRight: '10px' },
          required: true,
        },
        {
          name: 'group_select3',
          type: 'GroupSelect',
          searchKey: 'group_select2',
          connectKey: ['group_select4'],
          style: { width: '23%', marginRight: '10px' },
          fetchApi: (...args: any) =>
            getCityData?.apply(null, args).then((res: any) => {
              return res.map((v: any) => ({
                key: v.key.toString(),
                value: v.value.toString(),
              }));
            }),
          apiParamsCb: (value: string | number) => ({}),
          label: '县',
          required: true,
        },
        {
          name: 'group_select4',
          type: 'select',
          style: { width: '23%', marginRight: '10px' },
          label: '镇',
          searchKey: 'group_select3',
          options: [
            { key: 'tes1', value: '四川' },
            { key: 'tes12', value: '重庆' },
          ],
          required: true,
        },
      ],
    },
    {
      fieldType: 'checkbox',
      width: '100%',
      name: 'examinType',
      label: '组织形式',
      options: ORG_TYPE,
    },
    {
      fieldType: 'date',
      isRange: true,
      width: '100%',
      wrapperCol: { span: 5 },
      name: 'time',
      label: '申请日期',
    },
  ],
  columns: [
    {
      title: '序号',
      dataIndex: 'serial',
      key: 'serial',
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      title: '主体名称',
      dataIndex: 'bodyName',
    },
    {
      title: '组织形式',
      dataIndex: 'enterpriseType',
      render: (value: any) => ORG_TYPE.find((v) => v.value === value)?.label,
    },
    {
      title: '所属行业',
      dataIndex: 'businessString',
    },
    {
      title: '主体类别',
      dataIndex: 'subjectAttributeString',
    },
    {
      title: '所属地区',
      dataIndex: 'address',
    },
    {
      title: '申请时间',
      dataIndex: 'time',
    },
    {
      title: '操作',
      dataIndex: '_tool',
      render: (value: any, data: any) => {
        return (
          <a
            onClick={() => {
              callback(data, 'temp');
            }}
          >
            查看{' '}
          </a>
        );
      },
    },
  ],
});
