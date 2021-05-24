/*
 * File: index.ts
 * Description: 描述
 * File Created: 2020-11-26 08:03:43
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 11:32:50
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import request from './request';
import { stringify } from 'qs';
import Cookies from 'js-cookie';
import { Modal, notification } from 'antd';
import { Alert } from '@/components';

const API_URL = '';

interface getProps {
  url: string;
  params?: any;
  options?: any;
  isAlert?: boolean;
}

interface postProps {
  url: string;
  data?: any;
  options?: any;
  isAlert?: boolean;
}
interface getProps {
  url: string;
  data?: any;
  isJson?: boolean;
}

interface deleteProps {
  url: string;
  data?: any;
  options?: any;
  isAlert?: boolean;
}
/**
 * @function get请求方法
 * @param url 请求地址
 * @param params 请求參數
 * @param options 请求配置
 * @param isAlert 錯誤是否提示
 */
export async function get({ url, params = {}, options = {}, isAlert }: getProps) {
  return requestApi(url, params, options, 'GET', isAlert);
}
/**
 * @function post请求方法
 * @param url 请求地址
 * @param data 请求參數
 * @param options 请求配置
 * @param isAlert 錯誤是否提示
 */
export async function post({ url, data, options, isAlert }: postProps) {
  return requestApi(url, data, options, 'POST', isAlert);
}
/**
 * @function delete请求方法
 * @param url 请求地址
 * @param data 请求參數
 * @param options 请求配置
 * @param isAlert 錯誤是否提示
 */
export async function del({ url, data = {}, options = {}, isAlert }: deleteProps) {
  return requestApi(url, data, options, 'delete', isAlert);
}
/**
 * @function 基础请求方法
 * @description 统一做异常监控 code为200返回结果 否则错误  isAlert控制是否错误提示 默认提示
 * @param url 请求地址
 * @param params 请求參數
 * @param type 请求配类型
 * @param isAlert 錯誤是否提示
 */

export async function put({ url, data = {}, options = {}, isAlert }: deleteProps) {
  return requestApi(url, data, options, 'PUT', isAlert);
}
export async function requestApi(
  url = '',
  params: any,
  options: any,
  type: string,
  isAlert = false,
) {
  const headers = {
    ...(Cookies.get('token') ? { Authorization: Cookies.get('token') } : null),
    accept: '*/*',
    ...options?.headers,
  };
  return request(`${API_URL}${url}`, {
    method: type,
    ...(type !== 'GET'
      ? { data: params }
      : {
          params,
        }),
    paramsSerializer: (param) => stringify(param),
    ...options,
    headers,
  }).then((res: any) => {
    const { code, msg } = res;
    if (code && code === 200) {
      return res;
    }
    if (url.indexOf('user/login') !== -1) {
      Modal.error({
        title: '登录失败',
        content: msg || '登录错误',
        okText: '确定',
      });
    } else {
      const openNotificationWithIcon = (mes: any) => {
        notification['error']({
          message: `错误api :  ${url}`,
          description: mes || 'mock数据模拟接口 或者 无code及相关说明',
        });
      };
      openNotificationWithIcon(msg);
      isAlert && Alert.warn(msg);
      return res;
    }
    return Promise.reject();
  });
}

/**
 * 获取图片地址
 * @param files 图片文件
 */
export const getFormImgUrl = (files: any[]) => {
  return files.map((v) => v.response.data);
};
