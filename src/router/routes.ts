import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout/index.vue';

// 主框架内显示的路由
export const frameIn: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/home/flower/list.vue'),
        meta: {
          title: '商城列表',
        },
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/home/flower/detail.vue'),
        meta: {
          title: '鲜花详情',
        },
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/home/flower/mycart.vue'),
        meta: {
          title: '购物车',
        },
      },
      {
        path: 'orders',
        name: 'order',
        component: () => import('@/views/home/flower/myorder.vue'),
        meta: {
          title: '订单',
        },
      }
      
    ],
  },
];

// 主框架外显示的路由
const frameOut = [
  {
    path: '/uinfo',
    name: 'uinfo',
    component: () => import('@/views/home/userInfo.vue'),
    meta: {
      title: 'userinfo',
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/sys/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/sys/register/index.vue'),
    meta: {
      title: '注册',
    },
  },
];


const errorPage = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/sys/error/404.vue'),
  },
];

export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
