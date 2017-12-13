import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import CreateObject from '@/components/CreateObject';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/new_object',
      name: 'CreateObject',
      component: CreateObject,
    },
  ],
});
