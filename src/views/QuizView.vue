<template>
  <div class="quiz-view">
    <!-- 헤더 영역 -->
    <header class="quiz-header">
      <h1>Quiz 퀴즈</h1>
      <p>여기는 퀴즈의 나라! 출퀴즈 퀴즈왕이 가득한 곳이야. 지금 바로 도전해보세요!</p>
    </header>

    <!-- 네비게이션 -->
    <nav class="navigation">
      <router-link to="/" class="nav-item">홈</router-link>
      <span class="nav-separator">|</span>
      <span class="nav-item active">퀴즈 목록</span>
    </nav>

    <!-- 퀴즈 생성 컴포넌트 -->
    <div class="container">
      <QuizCreate @create-quiz="updateQuiz" @content-change="handleContentChange" />
    </div>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <div class="container">
        <h2>퀴즈 목록</h2>

        <div class="quiz-list">
          <div
            v-for="quiz in sortedQuizzes"
            :key="quiz.pk"
            class="quiz-item"
            @click="goToDetail(quiz.pk)"
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
import QuizCreate from '../components/quiz/QuizCreate.vue'

export default {
  name: 'QuizView',
  components: {
    QuizCreate,
  },
  data() {
    return {
      quizList: [
        {
          pk: 1,
          question:
            'Python 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명령어는?',
          answer: 'virtualenv',
        },
        {
          pk: 2,
          question: 'HTML에서 텍스트 입력란을 만드는 데 사용되는 요소는?',
          answer: 'input',
        },
        {
          pk: 3,
          question:
            '웹 애플리케이션에서 클라이언트의 데이터를 서버로 전송할 때 주로 사용되는 HTTP메서드는?',
          answer: 'post',
        },
        {
          pk: 4,
          question: 'JavaScript에서 DOM 요소를 ID로 선택할 때 사용하는 메서드는?',
          answer: 'getElementById',
        },
        {
          pk: 5,
          question:
            '웹 애플리케이션을 개발할 때, 사용자의 브라우저에 보여지는 부분을 렌더링하는 언어는 무엇인가요?',
          answer: 'html',
        },
      ],
      isWriting: false, // 작성 중 상태 추적
    }
  },
  computed: {
    // 내림차순 정렬된 퀴즈 목록
    sortedQuizzes() {
      return [...this.quizList].sort((a, b) => b.pk - a.pk)
    },
  },
  methods: {
    // 새 퀴즈 추가
    updateQuiz(newQuiz) {
      console.log('새 퀴즈 추가:', newQuiz)

      // 마지막 pk 값 찾기
      const maxPk = Math.max(...this.quizList.map((quiz) => quiz.pk), 0)

      // pk 값 추가한 새 퀴즈 객체 생성
      const quizWithPk = {
        ...newQuiz,
        pk: maxPk + 1,
      }

      // quizList에 새 퀴즈 추가
      this.quizList.push(quizWithPk)
      console.log('퀴즈가 추가되었습니다:', this.quizList)

      // 작성 중 상태 초기화
      this.isWriting = false
    },

    // 퀴즈 상세 페이지로 이동
    goToDetail(quizId) {
      this.$router.push(`/quiz/${quizId}`)
    },

    // 내용 변경 이벤트 처리
    handleContentChange(question, answer) {
      // 문제나 답안 중 하나라도 비어있지 않으면 작성 중으로 표시
      this.isWriting = (question && question.trim() !== '') || (answer && answer.trim() !== '')
      console.log('작성 중 상태:', this.isWriting)
    },

    // 특정 ID의 퀴즈 찾기
    getQuizById(id) {
      return this.quizList.find((quiz) => quiz.pk === Number(id)) || null
    },
  },
  provide() {
    return {
      quizzes: this.quizList,
      getQuizById: this.getQuizById,
    }
  },
  // 라우트 이탈 시 네비게이션 가드
  beforeRouteLeave(to, from, next) {
    if (this.isWriting) {
      // 작성 중인 내용이 있을 경우 확인 메시지 표시
      const confirm = window.confirm(
        '작성중이던 문제가 있습니다. 다른 경로로 이동시 작성중이던 내용은 소멸됩니다. 이동하시겠습니까?',
      )

      if (confirm) {
        // 확인을 누르면 이동
        next()
      } else {
        // 취소를 누르면 이동하지 않음
        next(false)
      }
    } else {
      // 작성 중인 내용이 없으면 바로 이동
      next()
    }
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
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-content h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
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
  .container {
    padding: 0 1rem;
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
