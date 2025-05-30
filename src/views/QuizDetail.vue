<template>
  <div class="quiz-detail">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <router-link to="/" class="nav-item">홈</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/quiz" class="nav-item">퀴즈 목록</router-link>
      <span class="nav-separator">|</span>
      <span class="nav-item active">퀴즈 상세</span>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container" v-if="currentQuiz">
        <div class="quiz-header-section">
          <h2>{{ currentQuiz.pk }}번 문제</h2>
          <router-link to="/quiz" class="back-btn">목록으로</router-link>
        </div>

        <div class="quiz-content">
          <div class="question-section">
            <h3>문제</h3>
            <p class="question-text">{{ currentQuiz.question }}</p>
          </div>

          <div class="answer-section">
            <h3>답안 제출</h3>
            <div class="form-group">
              <input
                type="text"
                v-model="userAnswer"
                placeholder="답을 입력하세요"
                class="answer-input"
                @keyup.enter="submitAnswer"
              />
              <button class="submit-btn" @click="submitAnswer" :disabled="!userAnswer.trim()">
                제출하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="not-found" v-else>
        <h2>퀴즈를 찾을 수 없습니다.</h2>
        <router-link to="/quiz" class="back-btn">목록으로</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'QuizDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  inject: ['quizzes', 'getQuizById'],
  data() {
    return {
      userAnswer: '',
    }
  },
  computed: {
    currentQuiz() {
      if (this.getQuizById) {
        return this.getQuizById(this.id)
      }

      const quizId = parseInt(this.id, 10)
      return this.quizzes.find((quiz) => quiz.pk === quizId) || null
    },
  },
  methods: {
    submitAnswer() {
      if (!this.userAnswer.trim() || !this.currentQuiz) return

      // 사용자 확인 메시지 표시
      const confirmMessage = `${this.userAnswer} 을/를 답안으로 제출합니다. 확실합니까?`
      const isConfirmed = window.confirm(confirmMessage)

      if (isConfirmed) {
        // 확인을 누르면 답안 페이지로 이동
        this.$router.push({
          name: 'AnswerView',
          params: {
            id: this.id,
            answer: this.currentQuiz.answer,
          },
          query: {
            userAnswer: this.userAnswer,
          },
        })
      } else {
        // 취소를 누르면 입력 초기화
        this.userAnswer = ''
      }
    },
  },
  mounted() {
    console.log('QuizDetail 컴포넌트가 마운트되었습니다')
    console.log('퀴즈 ID:', this.id)
    console.log('현재 퀴즈:', this.currentQuiz)
  },
}
</script>

<style scoped>
.quiz-detail {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* 헤더 영역 */
.quiz-header {
  background: linear-gradient(135deg, #ff8c42, #ff6b35);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-bottom: 0;
}

.quiz-header h1 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
}

.quiz-header p {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
}

/* 네비게이션 */
.navigation {
  background-color: #333;
  padding: 0.8rem 0;
  text-align: center;
  margin-bottom: 2rem;
}

.nav-item {
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.nav-item.active {
  background-color: #555;
  border-radius: 4px;
}

.nav-separator {
  color: white;
  margin: 0 0.5rem;
}

/* 메인 콘텐츠 */
.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quiz-header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.container h2 {
  color: #333;
  margin-bottom: 0;
  font-size: 1.8rem;
}

.back-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
}

.back-btn:hover {
  background: #545b62;
}

.quiz-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.question-section {
  margin-bottom: 2rem;
}

.question-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.question-text {
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid #ff8c42;
}

.answer-section {
  margin-bottom: 2rem;
}

.answer-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.form-group {
  display: flex;
  gap: 1rem;
}

.answer-input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.answer-input:focus {
  outline: none;
  border-color: #ff8c42;
}

.submit-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #218838;
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.not-found {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.not-found h2 {
  color: #dc3545;
  margin-bottom: 1.5rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }

  .quiz-header-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .quiz-content {
    padding: 1.5rem;
  }

  .form-group {
    flex-direction: column;
  }
}
</style>
