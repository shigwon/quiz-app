<template>
  <div class="answer-section">
    <h2>3. 정답 페이지</h2>
    <p>작성한 답안이 정답인지 확인하세요.</p>

    <div class="answer-results">
      <!-- 정답인 경우 -->
      <div class="answer-card correct">
        <div class="answer-header">
          <span class="question-label">5번 문제</span>
          <h4>정답 확인</h4>
        </div>
        <div class="answer-body">
          <div class="result-message correct-msg">정답입니다!</div>
          <div class="answer-info">
            <div>나의 제출 답안: <span class="user-answer">html</span></div>
            <div>정답: <span class="correct-answer-text">html</span></div>
          </div>
        </div>
      </div>

      <!-- 오답인 경우 -->
      <div class="answer-card incorrect">
        <div class="answer-header">
          <span class="question-label">5번 문제</span>
          <h4>정답 확인</h4>
        </div>
        <div class="answer-body">
          <div class="result-message incorrect-msg">오답입니다.</div>
          <div class="answer-info">
            <div>나의 제출 답안: <span class="user-answer">java</span></div>
            <div>정답: <span class="correct-answer-text">html</span></div>
          </div>
        </div>
      </div>
    </div>
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
    }
  },
  mounted() {
    this.loadQuiz()
  },
  methods: {
    loadQuiz() {
      const quizId = parseInt(this.id)
      this.quiz = this.quizzes.find((q) => q.pk === quizId)
    },
    goBack() {
      this.$router.push('/quiz')
    },
  },
}
</script>

<style scoped>
.answer-section {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

h2 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

p {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.answer-results {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.answer-card {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ddd;
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
</style>
