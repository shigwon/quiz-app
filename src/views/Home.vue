<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <span class="nav-item active">Home</span>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <h2>퀴즈 앱 사용 방법</h2>

        <section class="quiz-intro">
          <h3>1. 퀴즈 목록 확인하기</h3>
          <p>퀴즈 목록 페이지에서 다양한 퀴즈를 확인하세요.</p>

          <div class="quiz-questions">
            <div class="question-item">
              <div class="question-number">5번 문제.</div>
              <div class="question-text">
                몰 애플리케이션을 개발할 때, 사용자의 브라우저에 보여지는 부분을 렌더링하는 언어는
                무엇인가요?
              </div>
              <div class="answer-hint">정답 입력</div>
              <input type="text" class="answer-input" placeholder="답을 입력하세요" />
            </div>

            <div class="question-item">
              <div class="question-number">4번 문제.</div>
              <div class="question-text">
                Python의 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명령어는?
              </div>
              <div class="answer-hint">정답 입력</div>
              <input type="text" class="answer-input" placeholder="답을 입력하세요" />
            </div>

            <div class="question-item">
              <div class="question-number">3번 문제.</div>
              <div class="question-text">
                몰 애플리케이션에서 클라이언트의 데이터를 서버로 전송할 때 주로 사용되는 HTTP
                메서드는?
              </div>
              <div class="answer-hint">정답 입력</div>
              <input type="text" class="answer-input" placeholder="답을 입력하세요" />
            </div>

            <div class="question-item">
              <div class="question-number">2번 문제.</div>
              <div class="question-text">HTML에서 텍스트 입력란을 만드는 데 사용되는 요소는?</div>
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
              <textarea id="question" v-model="newQuestion" placeholder="" rows="3"></textarea>
            </div>

            <div class="form-group">
              <label for="answer">답안</label>
              <input type="text" id="answer" v-model="newAnswer" placeholder="" />
            </div>

            <button class="create-btn" @click="createQuiz">퀴즈 생성</button>
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
  data() {
    return {
      newQuestion: '',
      newAnswer: '',
    }
  },
  methods: {
    createQuiz() {
      if (this.newQuestion.trim() && this.newAnswer.trim()) {
        alert(`퀴즈가 생성되었습니다!\n문제: ${this.newQuestion}\n답안: ${this.newAnswer}`)
        // 실제로는 여기서 퀴즈를 저장하는 로직 추가
        this.newQuestion = ''
        this.newAnswer = ''
      } else {
        alert('문제와 답안을 모두 입력해주세요.')
      }
    },
  },
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
  font-weight: bold;
}

.nav-item.active {
  background-color: #555;
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

.quiz-intro h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.quiz-intro > p {
  color: #666;
  margin-bottom: 2rem;
}

/* 퀴즈 질문들 */
.quiz-questions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.question-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question-number {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.question-text {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.answer-hint {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.answer-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.answer-input:focus {
  outline: none;
  border-color: #ff8c42;
  box-shadow: 0 0 0 2px rgba(255, 140, 66, 0.2);
}

/* 퀴즈 생성 섹션 */
.quiz-create-section {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.quiz-create-section h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.quiz-create-section > p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.quiz-creator {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #e9ecef;
}

.quiz-creator h4 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: normal;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  color: #666;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: normal;
}

.form-group textarea,
.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
  background: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-group textarea:focus,
.form-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.create-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.create-btn:hover {
  background: #0056b3;
}

/* 정답 페이지 섹션 */
.answer-section {
  margin-top: 3rem;
}

.answer-section h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.answer-section > p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.answer-results {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.answer-card {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.answer-header {
  background: #e9ecef;
  padding: 1rem;
  text-align: center;
}

.answer-card.correct .answer-header {
  background: #e9ecef;
}

.answer-card.incorrect .answer-header {
  background: #e9ecef;
}

.question-label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.2rem;
}

.answer-header h4 {
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: 600;
}

.answer-body {
  padding: 1.5rem;
  background: white;
}

.result-message {
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1rem;
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
  font-size: 0.9rem;
  color: #555;
}

.user-answer {
  color: #666;
  font-weight: normal;
}

.correct-answer-text {
  color: #333;
  font-weight: 500;
}

/* 반응형 디자인 추가 */
@media (max-width: 768px) {
  .quiz-creator {
    padding: 1.5rem;
  }

  .answer-body {
    padding: 1rem;
  }
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }

  .quiz-header h1 {
    font-size: 1.5rem;
  }

  .quiz-header p {
    font-size: 0.9rem;
  }

  .question-item {
    padding: 1rem;
  }
}
</style>
