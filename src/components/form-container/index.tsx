/*
 * File: index.tsx
 * Description: 表单复选框组件
 * File Created: 2020-09-28 09:36:53
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-11-19 10:02:09
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React, { ReactNode, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import classNames from 'classnames'
import { FormInstance } from 'antd/lib/form/Form'
import { usePrevious } from 'react-use'
import isEqual from 'react-fast-compare'
import _ from 'lodash'
import './index.less'
import {
    FormInput,
    FormCheckbox,
    FormSelect,
    FormRadio,
    FormDate,
    FormInputsearch,
    FormPicker,
    FormGroup,
    FormInputMultiple,
    FormUpload,
    FormCustom,
} from '../form-item'

//基础表单组件
const FormComps: { [key: string]: any } = {
    input: FormInput,
    checkbox: FormCheckbox,
    select: FormSelect,
    radio: FormRadio,
    date: FormDate,
    inputsearch: FormInputsearch,
    picker: FormPicker,
    group: FormGroup,
    inputMultiple: FormInputMultiple,
    upload: FormUpload,
    custom: FormCustom,
}

interface IField {
    name: string
    label?: string
    /** 表单组件类型 */
    fieldType: string
    width?: string | number
    style?: React.CSSProperties
    [key: string]: any
}

interface FormContainerProps extends FormProps<any> {
    fields: IField[]
    form: FormInstance
    data?: any
    onValuesChange?: (changedValues: any, allValues: any) => void
    maxItem?: number
    onOk?: Function
    onRest?: Function
    renderFooter?: Function
    renderBtns?: Function
    isBtn?: boolean
    renderFormItem?: any
    isleft?: boolean
}

/** 表单容器组件 */
const FormContainer = (props: FormContainerProps, ref: any) => {
    const {
        data,
        labelCol,
        wrapperCol,
        form,
        maxItem,
        isBtn = true,
        onOk,
        onRest,
        renderFooter,
        renderFormItem,
        renderBtns,
        isleft = false,
        ...rest
    } = props
    const { setFieldsValue } = form
    const [isMore, setIsmore] = useState<boolean>(false)
    const prevData = usePrevious(data)
    const renderForm = (Component: any, field: IField) => {
        const _labelCol: any = { xs: { span: 2 }, sm: { span: 2 } }
        const _wrapperCol: any = { xs: { span: 20 }, sm: { span: 20 } }
        const _props: any = {
            form: props.form,
            labelCol: labelCol || _labelCol,
            wrapperCol: wrapperCol || _wrapperCol,
            ..._.omit(field, 'fieldType'),
        }
        return <Component {..._props} />
    }
    useEffect(() => {
        if (!isEqual(data, prevData)) setFieldsValue(data)
    }, [data, prevData, setFieldsValue])

    useImperativeHandle(ref, () => ({
        form: props.form,
    }))
    const _onRest = () => {
        onRest && onRest()
        form.resetFields()
    }
    const _onOk = () => {
        onOk && onOk()
    }
    const _renderBtn = () => {
        return (
            <>
                <Button className={'btn_tools_search'} type={'primary'} onClick={_onOk}>
                    查询
                </Button>
                <Button className={'btn_tools_rest'} onClick={_onRest}>
                    重置
                </Button>
            </>
        )
    }
    const _renderBtns = () =>
        isBtn ? <div className={'btn_tools'}>{_renderBtn()}</div> : renderBtns ? renderBtns() : null
    const renderMoreType = (value: string, status: boolean): ReactNode => {
        return (
            <div className={'btn'}>
                {_renderBtns()}
                {maxItem && (
                    <p
                        className={'btn_more'}
                        onClick={() => {
                            setIsmore(status)
                        }}
                    >
                        {value}
                    </p>
                )}
            </div>
        )
    }
    const renderMore = (i: number) => {
        const len = props?.fields?.length
        if (!maxItem || (maxItem && len <= maxItem)) {
            if (i === len - 1) {
                return <div className={'btn'}>{_renderBtns()}</div>
            } else {
                return null
            }
        } else {
            if (isMore) {
                if (i === len - 1) {
                    return renderMoreType('收起', false)
                } else {
                    return null
                }
            } else {
                if (maxItem && maxItem - 1 > i) {
                    return null
                } else {
                    return renderMoreType('更多搜索', true)
                }
            }
        }
    }
    return (
        <Form {...rest} form={form} className={classNames('rac_fc', rest.className)}>
            {renderFormItem && renderFormItem(form)}
            {props?.fields?.map((field, index) =>
                // 默认宽度比例为50%
                isMore || !maxItem || (maxItem && index < maxItem) ? (
                    <div
                        key={field.field || index}
                        className={'form__item'}
                        style={{ flexBasis: field.width || '50%', ...field.style }}
                    >
                        {renderForm(FormComps[field.fieldType], field)}
                        {renderMore(index)}
                    </div>
                ) : null
            )}
            {isleft && <div className={'btn_tools2'}>{_renderBtn()}</div>}
            {renderFooter && renderFooter()}
        </Form>
    )
}

export default React.memo(React.forwardRef(FormContainer))
