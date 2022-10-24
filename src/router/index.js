import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subestaciones/:id',
    name: 'subestaciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SubestacionesView.vue'),
    props: true
  },
  {
    path: '/rack/:id',
    name: 'rack',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/RackView.vue')
  },
  {
    path: '/ficha',
    name: 'ficha',
    props: route => ({ query: route.query }),
    component: () => import(/* webpackChunkName: "about" */ '../views/FichaTecnica.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
