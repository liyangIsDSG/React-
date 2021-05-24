export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './ListTableList',
  // },
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    name: '首页',
    icon: 'table',
    path: '/homepage',
    component: './homePage',
  },
  {
    name: '系统管理',
    icon: 'table',
    path: '/system',
    component: './system',
  },
  {
    name: '权限',
    icon: 'table',
    path: '/permission',
    component: './permission',
  },
  {
    name: '角色',
    icon: 'table',
    path: '/role',
    component: './role',
  },
  {
    name: '机构管理',
    icon: 'table',
    path: '/organization',
    component: './organization',
  },
  {
    name: '行政区划',
    icon: 'table',
    path: '/adminarea',
    component: './adminArea',
  },
  {
    name: '基础组件',
    icon: 'table',
    path: '/component',
    component: './component-test',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
