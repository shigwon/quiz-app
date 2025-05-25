<template>
  <div class="home">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <span class="nav-item active">홈</span>
      <span class="nav-separator">|</span>
      <router-link to="/quiz" class="nav-item">퀴즈 목록</router-link>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <h2>퀴즈 앱 사용 방법</h2>

        <section class="feature-card">
          <h3>1. 퀴즈 목록 확인하기</h3>
          <p>퀴즈 목록 페이지에서 다양한 퀴즈를 확인할 수 있습니다.</p>
          <router-link to="/quiz" class="action-btn">퀴즈 목록 보기</router-link>
        </section>

        <section class="feature-card">
          <h3>2. 새 퀴즈 만들기</h3>
          <p>직접 퀴즈를 생성하여 퀴즈 목록에 추가해보세요.</p>
          <router-link to="/quiz" class="action-btn">퀴즈 생성하러 가기</router-link>
        </section>

        <section class="feature-card">
          <h3>3. 퀴즈 풀기</h3>
          <p>퀴즈를 풀고 정답을 확인해보세요.</p>
          <router-link to="/quiz" class="action-btn">퀴즈 풀러 가기</router-link>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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

.container h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.feature-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.feature-card p {
  color: #666;
  margin-bottom: 1rem;
}

.action-btn {
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.action-btn:hover {
  background: #0069d9;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }
}
</style>
