<template>
  <div>
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
        <input type="text" id="answer" v-model="answer" placeholder="정답을 입력하세요" required />
      </div>

      <div class="form-actions">
        <button type="submit" class="create-btn" :disabled="!question.trim() || !answer.trim()">
          퀴즈 생성
        </button>
        <button type="button" class="cancel-btn" @click="$emit('cancel')">취소</button>
      </div>
    </form>

    <!-- 디버깅을 위한 직접 submit 버튼 -->
    <button @click="directSubmit" class="direct-submit-btn">직접 Submit 호출</button>
  </div>
</template>

<script>
export default {
  name: 'QuizForm',
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  methods: {
    submitEvent() {
      console.log('submitEvent 호출됨')

      if (!this.question.trim() || !this.answer.trim()) {
        alert('문제와 답안을 모두 입력해주세요.')
        return
      }

      const newQuiz = {
        question: this.question.trim(),
        answer: this.answer.trim(),
      }

      console.log('QuizForm - 새 퀴즈 객체 생성:', newQuiz)

      // create-quiz 이벤트 발생 (부모 컴포넌트로 새 퀴즈 전달)
      this.$emit('create-quiz', newQuiz)
      console.log('QuizForm - create-quiz 이벤트 발생됨')

      // 폼 초기화
      this.question = ''
      this.answer = ''
    },
    // 디버깅용 직접 호출 메서드
    directSubmit() {
      console.log('직접 Submit 버튼 클릭됨')
      // 테스트 데이터 생성
      this.question = '직접 호출로 생성된 테스트 문제입니다'
      this.answer = '테스트 답안'

      // submitEvent 메서드 직접 호출
      this.submitEvent()
    },
  },
  mounted() {
    console.log('QuizForm 컴포넌트가 마운트되었습니다')

    // 폼 제출 이벤트 직접 리스너 등록 (디버깅용)
    const form = document.querySelector('.quiz-form')
    if (form) {
      console.log('폼 요소 찾음, 이벤트 리스너 등록')
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('네이티브 폼 submit 이벤트 발생')
      })
    } else {
      console.error('폼 요소를 찾을 수 없습니다')
    }
  },
}
</script>

<style scoped>
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

/* 디버깅용 직접 호출 버튼 */
.direct-submit-btn {
  display: block;
  margin-top: 1rem;
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
}

.direct-submit-btn:hover {
  background: #c82333;
}
</style>
