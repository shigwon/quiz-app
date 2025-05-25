// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuizView from '../views/QuizView.vue'
import QuizDetail from '../views/QuizDetail.vue'
// 컴포넌트의 위치에 따라 경로 수정
// 만약 AnswerView가 views 폴더에 있다면:
import AnswerView from '../views/AnswerView.vue'
// 만약 AnswerView가 components/quiz 폴더에 있다면:
// import AnswerView from '../components/quiz/AnswerView.vue'

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
    path: '/quiz/:id',
    name: 'QuizDetail',
    component: QuizDetail,
    props: true,
  },
  {
    path: '/quiz/:id/answer/:answer',
    name: 'AnswerView',
    component: AnswerView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
