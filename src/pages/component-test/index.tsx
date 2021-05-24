/*
 * File: index.tsx
 * Description: 描述
 * File Created: 2020-11-26 08:40:38
 * Author: yangwenwu
 * ------
 * Last Modified: 2020-12-07 13:18:43
 * Modified By: yangwenwu at <1552153802@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import SearchTable from './SearchTable';
interface NMGProps {}

const NMG: React.FC<NMGProps> = (props) => {
  return (
    <div style={{ background: '#fff', padding: '10px' }}>
      <SearchTable />
    </div>
  );
};

export default NMG;
