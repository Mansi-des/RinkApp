import { createRouter, createWebHistory } from 'vue-router';
import Rightsidebar from '../components/Rightsidebar.vue';
const routes = [
  {
    path: '/',
    redirect: '/Rightsidebar.vue'
  },
  {
    path: '/Rightsidebar.vue',
    component: Rightsidebar
  },
  {
    path: '/marketplace',
    name: 'Productmanagement',
    component: () => import(/* webpackChunkName: "Productmanagement" */ '../views/Productmanagement.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
  
export default router;