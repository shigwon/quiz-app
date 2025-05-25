// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuizView from '../views/QuizView.vue'
import QuizDetail from '../views/QuizDetail.vue'
import QuizCreate from '../views/QuizCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz',
    name: 'QuizView',
    component: QuizView,
  },
  {
    path: '/quiz/create',
    name: 'QuizCreate',
    component: QuizCreate,
  },
  {
    path: '/quiz/:id',
    name: 'QuizDetail',
    component: QuizDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
