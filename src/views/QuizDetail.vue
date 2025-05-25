<template>
  <div class="quiz-detail">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <button class="nav-item" @click="$emit('go-back')">홈</button>
      <span class="nav-separator">|</span>
      <button class="nav-item" @click="$emit('go-back')">퀴즈 목록</button>
      <span class="nav-separator">|</span>
      <span class="nav-item active">퀴즈 상세</span>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container" v-if="quiz">
        <div class="quiz-header-section">
          <h2>{{ quiz.pk }}번 문제</h2>
          <button class="back-btn" @click="$emit('go-back')">목록으로</button>
        </div>

        <div class="quiz-content">
          <div class="question-section">
            <h3>문제</h3>
            <p class="question-text">{{ quiz.question }}</p>
          </div>

          <div class="answer-section" v-if="!isSubmitted">
            <h3>답안 제출</h3>
            <div class="form-group">
              <input
                type="text"
                v-model="userAnswer"
                placeholder="답을 입력하세요"
                class="answer-input"
              />
              <button class="submit-btn" @click="submitAnswer" :disabled="!userAnswer.trim()">
                제출하기
              </button>
            </div>
          </div>

          <div class="result-section" v-if="isSubmitted">
            <h3>결과</h3>
            <div class="answer-card" :class="{ correct: isCorrect, incorrect: !isCorrect }">
              <div class="answer-header">
                <span class="question-label">{{ quiz.pk }}번 문제</span>
                <h4>정답 확인</h4>
              </div>
              <div class="answer-body">
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
            <div class="action-buttons">
              <button class="try-again-btn" @click="resetAnswer">다시 시도</button>
              <button class="back-to-list-btn" @click="$emit('go-back')">목록으로</button>
            </div>
          </div>
        </div>
      </div>
      <div class="not-found" v-else>
        <h2>퀴즈를 찾을 수 없습니다.</h2>
        <button class="back-btn" @click="$emit('go-back')">목록으로</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'QuizDetail',
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userAnswer: '',
      isSubmitted: false,
      isCorrect: false,
    }
  },
  methods: {
    submitAnswer() {
      if (!this.userAnswer.trim()) return

      // 대소문자 구분 없이 정답 비교
      this.isCorrect = this.userAnswer.trim().toLowerCase() === this.quiz.answer.toLowerCase()
      this.isSubmitted = true
    },
    resetAnswer() {
      this.userAnswer = ''
      this.isSubmitted = false
      this.isCorrect = false
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
  background: none;
  border: none;
  cursor: pointer;
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

.result-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* 정답 카드 스타일 */
.answer-card {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}

.answer-card.correct {
  border-color: #28a745;
}

.answer-card.incorrect {
  border-color: #dc3545;
}

.answer-header {
  background: #f8f9fa;
  padding: 0.5rem;
  text-align: center;
}

.question-label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.2rem;
}

.answer-header h4 {
  margin: 0;
  font-size: 0.9rem;
  color: #333;
}

.answer-body {
  padding: 1rem;
}

.result-message {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
  gap: 0.3rem;
  font-size: 0.8rem;
  color: #555;
}

.user-answer {
  font-weight: 500;
}

.correct-answer-text {
  color: #28a745;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.try-again-btn {
  flex: 1;
  background: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.try-again-btn:hover {
  background: #0069d9;
}

.back-to-list-btn {
  flex: 1;
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-to-list-btn:hover {
  background: #545b62;
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

  .action-buttons {
    flex-direction: column;
  }
}
</style>
