<!-- src/views/QuizCreate.vue -->
<template>
  <div class="quiz-create">
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
      <span class="nav-separator">|</span>
      <span class="nav-item active">QuizCreate</span>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <h2>새로운 퀴즈 생성</h2>

        <div class="quiz-form-container">
          <!-- 퀴즈 생성 폼 -->
          <form @submit.prevent="submitEvent" class="quiz-form">
            <div class="form-group">
              <label for="question">문제</label>
              <textarea
                id="question"
                v-model="question"
                placeholder="문제를 입력하세요"
                rows="4"
                required
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
              />
            </div>

            <div class="form-actions">
              <button
                type="submit"
                class="create-btn"
                :disabled="!question.trim() || !answer.trim()"
              >
                퀴즈 생성
              </button>
              <button type="button" class="cancel-btn" @click="goBack">취소</button>
            </div>
          </form>
        </div>
      </div>
    </main>
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
    submitEvent() {
      if (!this.question.trim() || !this.answer.trim()) {
        alert('문제와 답안을 모두 입력해주세요.')
        return
      }

      const newQuiz = {
        question: this.question.trim(),
        answer: this.answer.trim(),
      }

      // create-quiz 이벤트 발생 (부모 컴포넌트로 새 퀴즈 전달)
      this.$emit('create-quiz', newQuiz)

      // 폼 초기화
      this.question = ''
      this.answer = ''

      alert(`퀴즈가 생성되었습니다!`)

      // QuizView로 이동
      this.$router.push('/quiz')
    },
    goBack() {
      this.$router.push('/quiz')
    },
  },
}
</script>

<style scoped>
.quiz-create {
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

.container h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.quiz-form-container {
  margin-bottom: 2rem;
}

/* 퀴즈 폼 스타일 */
.quiz-form {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
}

.form-group textarea,
.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group textarea:focus,
.form-group input:focus {
  outline: none;
  border-color: #ff8c42;
  box-shadow: 0 0 0 2px rgba(255, 140, 66, 0.2);
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.create-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1;
}

.create-btn:hover:not(:disabled) {
  background: #218838;
}

.create-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.cancel-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1;
}

.cancel-btn:hover {
  background: #545b62;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }

  .quiz-form {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
