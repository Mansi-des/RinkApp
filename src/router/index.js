import { createRouter, createWebHistory } from 'vue-router';
import Marketplace from '../views/Productmanagement.vue';
const routes = [
  {
    path: '/',
    redirect: '/marketplace.vue'
  },
  {
    path: '/marketplace.vue',
    component: Marketplace
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