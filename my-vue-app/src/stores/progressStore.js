import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  const completedLevels = ref(new Set())
  const answers = ref({})

  function markCompleted(id) {
    completedLevels.value.add(id)
  }

  function saveAnswer(id, text) {
    answers.value[id] = text
  }

  return {
    completedLevels,
    answers,
    markCompleted,
    saveAnswer
  }
})
