import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['users'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页',
    path: '/',
    children: [
      {
        name: '用户中心',
        icon: 'dashboard',
        path: 'users',
        children: [
          {
            name: '用户列表',
            path: 'list',
            component: dynamicWrapper(app, ['users'], () => import('../routes/Users')),
          }
        ],
      }
    ],
  }
];
