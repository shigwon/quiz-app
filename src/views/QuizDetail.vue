<!-- src/views/QuizDetail.vue -->
<template>
  <div class="quiz-detail">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <router-link to="/" class="nav-item">Home</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/quiz" class="nav-item">QuizView</router-link>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <div v-if="quiz" class="quiz-detail-content">
          <h2>{{ quiz.pk }}번 문제</h2>

          <div class="quiz-card">
            <div class="question-section">
              <h3>문제</h3>
              <p class="question-text">{{ quiz.question }}</p>
            </div>

            <div class="answer-section">
              <h3>답안 입력</h3>
              <div class="answer-input-group">
                <label :for="`quiz-${quiz.pk}-input`">정답 입력</label>
                <!-- quiz pk값을 이용한 input -->
                <input
                  :id="`quiz-${quiz.pk}-input`"
                  type="text"
                  v-model="userAnswer"
                  placeholder="답을 입력하세요"
                  @keyup.enter="checkAnswer"
                />
              </div>
              <button class="submit-btn" @click="checkAnswer" :disabled="!userAnswer.trim()">
                정답 확인
              </button>
            </div>

            <!-- 정답 결과 표시 -->
            <div v-if="showResult" class="result-section">
              <div class="result-card" :class="{ correct: isCorrect, incorrect: !isCorrect }">
                <div class="result-header">
                  <span class="question-label">{{ quiz.pk }}번 문제</span>
                  <h4>정답 확인</h4>
                </div>
                <div class="result-body">
                  <div
                    class="result-message"
                    :class="{ 'correct-msg': isCorrect, 'incorrect-msg': !isCorrect }"
                  >
                    {{ isCorrect ? '정답입니다!' : '오답입니다.' }}
                  </div>
                  <div class="answer-info">
                    <div>
                      나의 제출 답안: <span class="user-answer">{{ userAnswer }}</span>
                    </div>
                    <div>
                      정답: <span class="correct-answer-text">{{ quiz.answer }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 뒤로가기 버튼 -->
          <div class="action-buttons">
            <button class="back-btn" @click="goBack">퀴즈 목록으로 돌아가기</button>
          </div>
        </div>

        <!-- 퀴즈를 찾을 수 없는 경우 -->
        <div v-else class="not-found">
          <h2>퀴즈를 찾을 수 없습니다</h2>
          <p>요청하신 퀴즈가 존재하지 않습니다.</p>
          <button class="back-btn" @click="goBack">퀴즈 목록으로 돌아가기</button>
        </div>
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
    quizzes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      quiz: null,
      userAnswer: '',
      showResult: false,
      isCorrect: false,
    }
  },
  mounted() {
    this.loadQuiz()
  },
  watch: {
    id() {
      this.loadQuiz()
      this.resetForm()
    },
    quizzes() {
      this.loadQuiz()
    },
  },
  methods: {
    loadQuiz() {
      const quizId = parseInt(this.id)
      this.quiz = this.quizzes.find((q) => q.pk === quizId)
    },
    checkAnswer() {
      if (!this.userAnswer.trim()) return

      this.isCorrect = this.userAnswer.trim().toLowerCase() === this.quiz.answer.toLowerCase()
      this.showResult = true
    },
    resetForm() {
      this.userAnswer = ''
      this.showResult = false
      this.isCorrect = false
    },
    goBack() {
      this.$router.push('/quiz')
    },
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
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
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

.quiz-detail-content h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.quiz-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.question-section,
.answer-section {
  margin-bottom: 2rem;
}

.question-section h3,
.answer-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.question-text {
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid #ff8c42;
}

.answer-input-group {
  margin-bottom: 1rem;
}

.answer-input-group label {
  display: block;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.answer-input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.answer-input-group input:focus {
  outline: none;
  border-color: #ff8c42;
  box-shadow: 0 0 0 2px rgba(255, 140, 66, 0.2);
}

.submit-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #0056b3;
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

/* 정답 결과 섹션 */
.result-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.result-card {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.result-card.correct {
  border-color: #28a745;
}

.result-card.incorrect {
  border-color: #dc3545;
}

.result-header {
  background: #e9ecef;
  padding: 1rem;
  text-align: center;
}

.result-card.correct .result-header {
  background: #d4edda;
}

.result-card.incorrect .result-header {
  background: #f8d7da;
}

.question-label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.2rem;
}

.result-header h4 {
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: 600;
}

.result-body {
  padding: 1.5rem;
  background: white;
}

.result-message {
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.correct-msg {
  color: #28a745;
}

.incorrect-msg {
  color: #dc3545;
}

.answer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;
}

.user-answer {
  font-weight: 500;
}

.correct-answer-text {
  color: #28a745;
  font-weight: 600;
}

/* 액션 버튼들 */
.action-buttons {
  text-align: center;
  margin-top: 2rem;
}

.back-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background: #545b62;
}

/* 404 스타일 */
.not-found {
  text-align: center;
  padding: 3rem;
}

.not-found h2 {
  color: #dc3545;
  margin-bottom: 1rem;
}

.not-found p {
  color: #666;
  margin-bottom: 2rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }

  .quiz-card {
    padding: 1.5rem;
  }

  .result-body {
    padding: 1rem;
  }
}
</style>
