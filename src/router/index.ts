import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import { RouteEnum } from '../types/route.enum';

const routes = [
  {
    path: RouteEnum.HOME,
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: RouteEnum.LOGIN,
    name: 'Login',
    component: Login,
    meta: { requiresNotAuth: true },
  },
  {
    path: RouteEnum.REGISTER,
    name: 'Register',
    component: Register,
    meta: { requiresNotAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const token = Cookies.get('accessToken');

  if (to.meta.requiresAuth && !token) {
    next({ name: 'Login' });
  } else if (to.meta.requiresNotAuth && token) {
    next({ name: 'Home' })
  } else {
    next();
  }
});

export default router;
