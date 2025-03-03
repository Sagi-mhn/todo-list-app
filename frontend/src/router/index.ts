import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoForm from '../components/TodoForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: 
    () => import(/* webpackChunkName: "about" */ '../components/TodoList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/todoform',
    name: 'todoform',
    component: TodoForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router