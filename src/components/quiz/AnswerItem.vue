<template>
  <div class="answer-card" :class="{ correct: isCorrect, incorrect: !isCorrect }">
    <div class="answer-header">
      <span class="question-label">{{ questionNumber }}번 문제</span>
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
          정답: <span class="correct-answer-text">{{ correctAnswer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    questionNumber: {
      type: Number,
      required: true,
    },
    userAnswer: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
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
</style>
