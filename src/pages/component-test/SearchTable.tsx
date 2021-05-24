/*
 * File: form.tsx
 * Description: 描述
 * File Created: 2020-11-26 19:54:45
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 13:31:20
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */

import React, { useRef } from 'react';
import { Form, message, Upload, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { FormContainer, TableBase, WithGridView } from '@/components';
import Btns from '@/components/Btns';
import { getTable } from './services';
import { tempBody } from './config';
import style from './index.less';

interface IFormTableListProps {}

const FormTableList: React.FC<IFormTableListProps> = (props) => {
  const {} = props;
  const [form] = Form.useForm();
  const modalRef = useRef();
  const tableRef = useRef();

  /**
   * @description 操作回调
   */
  const callback = (data?: any, type?: string) => {};
  /**
   * @description 格式限制 上传excel
   */
  const beforeUpload = (file: any) => {
    const fileType = file.type;
    const typeList = [
      '.xls',
      '.xlsx',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
    const isJpgOrPng = typeList.includes(fileType);

    if (!isJpgOrPng) {
      message.error('上传文件格式需为xls、xlsx!');
    }
    return isJpgOrPng;
  };
  return (
    <div className={style.list}>
      <FormContainer
        // labelAlign={'left'}
        labelCol={{}}
        wrapperCol={{}}
        onOk={() => {
          //主体查询
          (tableRef?.current as any)?.refresh('2');
        }}
        onRest={() => {}}
        fields={tempBody()?.fields}
        form={form}
      />
      <div className={style.list__table}>
        <WithGridView
          headerRnder={() => {
            return (
              <Btns
                btns={[
                  {
                    render: () => {
                      return (
                        <Upload
                          showUploadList={false}
                          action={'/api/mainBody/insertExcelBody'}
                          beforeUpload={beforeUpload}
                        >
                          <Button icon={<UploadOutlined />}>快速导入</Button>
                        </Upload>
                      );
                    },
                  },
                  {
                    icon: <PlusOutlined twoToneColor="#fff" />,
                    title: '新增',
                    className: style.tool__add,
                    onClick: () => {
                      (modalRef.current as any).open();
                    },
                  },
                ]}
              />
            );
          }}
          renderComponents={(type: any) => {
            return (
              <TableBase
                modalType={type}
                ref={tableRef}
                columns={tempBody().columns}
                fetchApi={getTable}
                apiParams={(extraParams: any) => {
                  const formDta = form.getFieldsValue();
                  return {
                    ...formDta,
                    ...extraParams,
                  };
                }}
                renderCards={(data: any, i: number) => {
                  return <div>1</div>;
                }}
                onRow={(data: any) => {
                  return {
                    onDoubleClick: (e: any) => {},
                  };
                }}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default FormTableList;
