/*
 * File: utiles.ts
 * Description: 描述
 * File Created: 2020-11-11 16:44:24
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 11:13:50
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
/**
 * 数据类型检测，String，Number，Array...
 */
export class PrototypeCheck {
  static getPrototype(value: any): string {
    return Object.prototype.toString.call(value);
  }

  static checkProtoType(value: any, prototype: string): boolean {
    return this.getPrototype(value) === prototype;
  }

  /**
   * 是否String类型
   * @param value
   */
  static isString(value: any): boolean {
    return this.checkProtoType(value, '[object String]');
  }

  /**
   * 是否Number类型
   * @param value
   */
  static isNumber(value: any): boolean {
    return this.checkProtoType(value, '[object Number]');
  }

  /**
   * 是否Array类型
   * @param value
   */
  static isArray(value: any): boolean {
    return this.checkProtoType(value, '[object Array]');
  }

  /**
   * 是否Function类型
   * @param value
   */
  static isFunction(value: any): boolean {
    return this.checkProtoType(value, '[object Function]');
  }
}

/**
 * 生成唯一的通用唯一识别码 key
 * @param a
 */
export function uuid(a?: number) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

/**
 * form表单转json
 * @param FormDataToJSON form 表单
 */
export const FormDataToJSON = (FormElement: any) => {
  var formData: any = new FormData(FormElement);
  var ConvertedJSON = {};
  for (const [key, value] of formData?.entries()) {
    ConvertedJSON[key] = value;
  }

  return ConvertedJSON;
};
/**
 * form表单转json
 * @param data json
 */
export const JSONToFormData = (data: any) => {
  let forms: any = new FormData();
  Object.keys(data).forEach((val: any) => {
    forms?.append([val], data[val]);
  });
  data = forms;
};
/**
 * 时间格式化
 * @param data any
 */
export const renderTime = (date: any) => {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, ' ')
    .replace(/\.[\d]{3}Z/, '');
};
/**
 * 获取两个数组的交集
 * @param arr1 数组1
 * @param arr2 数组2
 */
export const intersectionArr = (arr1: string[], arr2: string[]): string[] => {
  const _temp: string[] = [];
  arr1.forEach((v1: string) => {
    if (arr2.indexOf(v1) !== -1) _temp.push(v1);
  });
  return _temp;
};

// 获取url的参数 hash模式
export const queryStringHash = () => {
  let _queryString = {};
  let _query = window.location.hash.substr(1).split('?');
  _query.shift();
  //  const _query = window.location.search.substr(1)
  //hash返回的是第一个’#‘之后的内容，search返回的是第一个’?‘之后的内容，如果’?‘之前有’#’，直接使用search得不到url链接的参数。
  const _vars = _query[0]?.split('&');
  _vars?.forEach((v, i) => {
    const _pair = v.split('=');
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
    } else if (typeof _queryString[_pair[0]] === 'string') {
      const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
      _queryString[_pair[0]] = _arr;
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
    }
  });
  return _queryString;
};
