//createRouter:创建router实例
//createWebHistory；创建
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login/index.vue';
import Layout from '@/views/Layout/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          //当访问一级路由的时候，二级路由也会得到渲染，就称这个路由为默认二级路由
          // 这里path置空，当访问/路径时，这个组件也会得到渲染,这就是默认二级路由
          path: '',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category',
          component: () => import('@/views/Category/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

export default router;
