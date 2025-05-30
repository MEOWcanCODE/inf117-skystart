<script setup>
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'

const props = defineProps({
  level: Object
})

const router = useRouter()
const answer = ref('')
const progress = useProgressStore()

function submitAnswer() {
  progress.saveAnswer(props.level.id, answer.value)
  progress.markCompleted(props.level.id)
  alert('Answer saved and progress updated!')
}

function goBack() {
  router.push('/student-dashboard?tab=courses')
}

// Track answer changes live
watch(answer, (newVal) => {
  if (newVal?.trim()) {
    progress.markCompleted(props.level.id)
  }
})

// Load previous answer on level change
watch(
  () => props.level.id,
  (newId) => {
    answer.value = progress.answers[newId] || ''
  },
  { immediate: true }
)
</script>

<template>
  <div class="lesson-page">
    <div class="lesson-nav">
      <button class="nav-btn" @click="goBack">← Back to Lessons</button>
    </div>

    <div class="lesson-card">
      <div class="video-placeholder"></div>

      <div class="lesson-info">
        <h3>{{ level.title }}</h3>
        <p class="subtitle">{{ level.subtitle }}</p>
        <p class="description">{{ level.description }}</p>

        <label class="question-label">{{ level.questionLabel }}</label>
        <p class="question-desc">{{ level.questionDescription }}</p>

        <textarea
          v-if="level.requiresInput !== false"
          v-model="answer"
          placeholder="Type your answer here"
        ></textarea>

        <button
          v-if="level.requiresInput === false"
          class="submit-btn"
          @click="submitAnswer"
        >
          Mark Done
        </button>

        <button
          v-if="level.requiresInput !== false"
          class="submit-btn"
          @click="submitAnswer"
        >
          Submit
        </button>

        <p class="hint">Hint: {{ level.hint }}</p>
      </div>
    </div>
  </div>
</template>
