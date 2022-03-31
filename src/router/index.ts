
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
    path: '/',
    name: "",
    component: () => import(/* webpackChunkName: "" */ '@/components/layout/index.vue'),
    children:[
      {
        path: '/home',
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ '@/views/homePage/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '@/components/login/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  next();
  // if (to.path == '/login') {
  //   next();
  // } else {
  //   isLogin ? next() : next('/login');
  // }
});
export default router
