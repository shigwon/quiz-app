<template>
  <div class="home">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <span class="nav-item">Home</span>
      <span class="nav-separator">|</span>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <h2>퀴즈 앱 사용 방법</h2>

        <section class="quiz-intro">
          <h3>1. 퀴즈 목록 확인하기</h3>
          <p>퀴즈 목록 페이지에서 다양한 퀴즈를 확인하세요.</p>

          <div class="quiz-questions">
            <div class="question-item" v-for="quiz in quizzes" :key="quiz.pk">
              <div class="question-number">{{ quiz.pk }}번 문제.</div>
              <div class="question-text">{{ quiz.question }}</div>
              <div class="answer-hint">정답 입력</div>
              <input type="text" class="answer-input" placeholder="답을 입력하세요" />
            </div>
          </div>
        </section>

        <!-- 퀴즈 생성하기 섹션 -->
        <section class="quiz-create-section">
          <h3>2. 퀴즈 생성하기</h3>
          <p>퀴즈를 직접 생성할 수도 있어요.</p>

          <div class="quiz-creator">
            <h4>퀴즈 생성</h4>

            <div class="form-group">
              <label for="question">문제</label>
              <textarea id="question" placeholder="" rows="3"></textarea>
            </div>

            <div class="form-group">
              <label for="answer">답안</label>
              <input type="text" id="answer" placeholder="" />
            </div>

            <button class="create-btn">퀴즈 생성</button>
          </div>
        </section>

        <!-- 정답 페이지 섹션 -->
        <section class="answer-section">
          <h3>3. 정답 페이지</h3>
          <p>작성한 답안의 정답인지 확인하세요.</p>

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
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  inject: ['quizzes'],
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* 헤더 영역 */
.quiz-header {
  background: #ff8c42;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 0;
}

.quiz-header h1 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
}

.quiz-header p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

/* 네비게이션 */
.navigation {
  background-color: #333;
  padding: 0.5rem 0;
  text-align: center;
  margin-bottom: 1.5rem;
}

.nav-item {
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
}

.nav-separator {
  color: white;
  margin: 0 0.5rem;
}

/* 메인 콘텐츠 */
.main-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.container h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.quiz-intro h3,
.quiz-create-section h3,
.answer-section h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.quiz-intro > p,
.quiz-create-section > p,
.answer-section > p {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* 퀴즈 질문들 */
.quiz-questions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.question-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.question-number {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.question-text {
  color: #555;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.answer-hint {
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}

.answer-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* 퀴즈 생성 섹션 */
.quiz-creator {
  background: white;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
}

.quiz-creator h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  color: #666;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.form-group textarea,
.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
}

.form-group textarea {
  resize: vertical;
  min-height: 60px;
}

.create-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 0;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
}

/* 정답 페이지 섹션 */
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
