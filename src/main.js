// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// 전역 상태 관리 (데이터 소스)
const quizzes = [
  {
    pk: 1,
    question: 'Python 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명령어는?',
    answer: 'virtualenv',
  },
  {
    pk: 2,
    question: 'HTML에서 텍스트 입력란을 만드는 데 사용되는 요소는?',
    answer: 'input',
  },
  {
    pk: 3,
    question:
      '웹 애플리케이션에서 클라이언트의 데이터를 서버로 전송할 때 주로 사용되는 HTTP메서드는?',
    answer: 'post',
  },
  {
    pk: 4,
    question: 'JavaScript에서 DOM 요소를 ID로 선택할 때 사용하는 메서드는?',
    answer: 'getElementById',
  },
  {
    pk: 5,
    question:
      '웹 애플리케이션을 개발할 때, 사용자의 브라우저에 보여지는 부분을 렌더링하는 언어는 무엇인가요?',
    answer: 'html',
  },
]

// 전역 제공 데이터
app.provide('quizzes', quizzes)

// 특정 ID의 퀴즈 찾기 함수
const getQuizById = (id) => {
  return quizzes.find((quiz) => quiz.pk === Number(id)) || null
}
app.provide('getQuizById', getQuizById)

app.mount('#app')
