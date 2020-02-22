import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Role from '@/views/Role.vue';
import User from '@/views/User.vue';
import Category from '@/views/Category.vue';
import Wiki from '@/views/Wiki.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {requiresAuth: true, layout: 'dashboard'},
  },
  {
    path: '/roles',
    name: 'role',
    component: Role,
    meta: {requiresAuth: true, layout: 'dashboard'},
  },
  {
    path: '/users',
    name: 'user',
    component: User,
    meta: {requiresAuth: true, layout: 'dashboard'},
  },
  {
    path: '/categories',
    name: '/category',
    component: Category,
    meta: {requiresAuth: true, layout: 'dashboard'},
  },

  {
    path: '/wiki/:id',
    name: 'wiki',
    component: Wiki,
    meta: {requiresAuth: true, layout: 'dashboard'},
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('crmifc');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
