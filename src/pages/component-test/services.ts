/*
 * File: services.ts
 * Description: 描述
 * File Created: 2020-11-26 20:00:28
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 11:30:20
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */

import { get } from '@/services';

/** 获取公司列表 */
export const getCityData = (params: any) => {
  return get({ url: `/api/nmg/Caeegimnopst2`, params });
};
/** 获取公司列表 */
export const getCompanies = (params: any) => {
  return get({ url: `/api/nmg/Caeegimnopst`, params });
};

/** 获取公司列表 */
export const getTable = (params: any) => {
  return get({ url: `/api/nmg/Caeegimnopst`, params });
};
