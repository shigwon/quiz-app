<template>
  <div class="quiz-create">
    <h3>퀴즈 생성</h3>
    <form @submit.prevent="submitQuiz" class="quiz-form">
      <div class="form-group">
        <label for="question">문제</label>
        <textarea
          id="question"
          v-model="question"
          placeholder="문제를 입력하세요"
          rows="4"
          required
          @input="handleContentChange"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="answer">답안</label>
        <input
          type="text"
          id="answer"
          v-model="answer"
          placeholder="정답을 입력하세요"
          required
          @input="handleContentChange"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="create-btn" :disabled="!question.trim() || !answer.trim()">
          퀴즈 생성
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'QuizCreate',
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  methods: {
    submitQuiz() {
      // 입력값 검증
      if (!this.question.trim() || !this.answer.trim()) {
        return
      }

      // 새 퀴즈 객체 생성
      const newQuiz = {
        question: this.question.trim(),
        answer: this.answer.trim(),
      }

      // 부모 컴포넌트로 create-quiz 이벤트 발생
      this.$emit('create-quiz', newQuiz)

      // 입력 필드 초기화
      this.question = ''
      this.answer = ''

      // 작성 상태 초기화 (빈 문자열로 변경 이벤트 발생)
      this.handleContentChange()
    },

    // 내용 변경 이벤트 핸들러
    handleContentChange() {
      // 부모 컴포넌트로 내용 변경 이벤트 발생
      this.$emit('content-change', this.question, this.answer)
    },
  },
}
</script>

<style scoped>
.quiz-create {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.quiz-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group textarea,
.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group textarea:focus,
.form-group input:focus {
  outline: none;
  border-color: #ff8c42;
}

.form-actions {
  margin-top: 1.5rem;
}

.create-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.create-btn:hover:not(:disabled) {
  background: #218838;
}

.create-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
