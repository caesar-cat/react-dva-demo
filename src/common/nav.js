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
    component: dynamicWrapper(app, ['auth', 'login'], () => import('../layouts/BasicLayout')),
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
            icon: 'user',
            component: dynamicWrapper(app, ['users'], () => import('../routes/Users/index')),
          }
        ]
      },
      {
        name: '图表',
        icon: 'dashboard',
        path: 'analysis',
        children: [
          {
            name: '饼图',
            path: 'circle',
            icon: 'dislike',
            component: dynamicWrapper(app, [], () => import('../routes/Analysis/circle'))
          },
          {
            name: '柱状图',
            path: 'column',
            icon: 'eye',
            component: dynamicWrapper(app, [], () => import('../routes/Analysis/column'))
          }
        ]
      }
    ]
  },

  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'setting',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            icon: 'global',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          }
        ]
      }
    ]
  }
];
