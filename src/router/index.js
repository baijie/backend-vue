import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from '@/components/layout/BaseLayout';
import userConfig from '@/page/base/user.config';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: BaseLayout,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'userconfig',
          component: userConfig,
        },
      ],
    },
  ],
});
