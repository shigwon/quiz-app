<template>
  <div id="app">
    <!-- 네비게이션 메뉴 -->
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">My App</router-link>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">소개</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">연락처</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">대시보드</router-link>
        </li>
      </ul>
    </nav>

    <!-- 라우터 뷰 - 현재 경로에 해당하는 컴포넌트가 렌더링됩니다 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 활성 링크 스타일 */
.nav-link.router-link-active {
  background-color: #3498db;
}

.main-content {
  padding: 2rem;
  min-height: calc(100vh - 80px);
}
</style>
