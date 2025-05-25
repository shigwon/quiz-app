<template>
  <header class="header">
    <h1>헤더 컴포넌트</h1>
    <nav>
      <router-link to="/">홈</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}
</style>
