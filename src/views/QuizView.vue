<template>
  <div class="quiz-view">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <button class="nav-item">홈</button>
      <span class="nav-separator">|</span>
      <span class="nav-item active">퀴즈 목록</span>
      <span class="nav-separator">|</span>
      <button class="nav-item" @click="$emit('go-to-create')">퀴즈 생성</button>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <div class="quiz-header-section">
          <h2>퀴즈 목록</h2>
          <button class="create-quiz-btn" @click="$emit('go-to-create')">새 퀴즈 생성</button>
        </div>

        <div class="quiz-list">
          <div
            v-for="quiz in sortedQuizzes"
            :key="quiz.pk"
            class="quiz-item"
            @click="$emit('go-to-detail', quiz.pk)"
          >
            <div class="quiz-number">{{ quiz.pk }}번 문제</div>
            <div class="quiz-question">{{ quiz.question }}</div>
            <div class="quiz-answer-hint">정답: {{ quiz.answer }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'QuizView',
  props: {
    quizzes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // Array.sort((a, b) => b.pk - a.pk) - 내림차순 정렬, pk값이 클수록 위에 표시
    sortedQuizzes() {
      return [...this.quizzes].sort((a, b) => b.pk - a.pk)
    },
  },
}
</script>

<style scoped>
.quiz-view {
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

.create-quiz-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-quiz-btn:hover {
  background: #218838;
}

/* 퀴즈 목록 */
.quiz-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.quiz-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quiz-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  border-color: #ff8c42;
}

.quiz-number {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.quiz-question {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.quiz-answer-hint {
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
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
  }

  .quiz-header h1 {
    font-size: 1.5rem;
  }

  .quiz-header p {
    font-size: 0.9rem;
  }

  .quiz-item {
    padding: 1rem;
  }
}
</style>
