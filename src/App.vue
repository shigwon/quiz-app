<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view
      :quizzes="quizzes"
      @create-quiz="handleCreateQuiz"
      @update-quiz="handleUpdateQuiz"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      quizzes: [
        {
          pk: 1,
          question:
            'Python 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명령어는?',
          answer: 'flask',
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
          question:
            'Python의 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명령어는?',
          answer: 'virtualenv',
        },
        {
          pk: 5,
          question:
            '웹 애플리케이션을 개발할 때, 사용자의 브라우저에 보여지는 부분을 렌더링하는 언어는 무엇인가요?',
          answer: 'html',
        },
      ],
    }
  },
  methods: {
    handleCreateQuiz(newQuiz) {
      // 새 퀴즈 생성
      // 새 pk 값은 기존 가장 큰 pk 값 + 1
      const maxPk = Math.max(...this.quizzes.map((quiz) => quiz.pk), 0)
      const quizWithPk = {
        ...newQuiz,
        pk: maxPk + 1,
      }

      // 새 퀴즈를 배열에 추가
      this.quizzes.push(quizWithPk)
    },
    handleUpdateQuiz(updatedQuiz) {
      // 기존 퀴즈 업데이트
      const index = this.quizzes.findIndex((quiz) => quiz.pk === updatedQuiz.pk)
      if (index !== -1) {
        this.quizzes[index] = updatedQuiz
      }
    },
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
