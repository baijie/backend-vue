import Vue from 'vue';
import Router from 'vue-router';
import userConfig from '@/page/base/user.config';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/userconfig',
      name: 'userConfig',
      component: userConfig,
    },
  ],
});
