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
            component: dynamicWrapper(app, ['users'], () => import('../routes/Users/index')),
          }
        ],
      }
    ],
  },

  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          },
          // {
          //   name: '注册',
          //   path: 'register',
          //   component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
          // },
          // {
          //   name: '注册结果',
          //   path: 'register-result',
          //   component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
          // },
        ],
      },
    ],
  }
];
