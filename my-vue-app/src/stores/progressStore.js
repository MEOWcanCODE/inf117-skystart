// src/stores/progressStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { levels as allCourseLevels } from '../data/levelData'; // Import the levels data

export const useProgressStore = defineStore('progress', () => {
  const completedLevels = ref(new Set()); // Stores IDs of completed levels
  const answers = ref({}); // Stores answers keyed by level ID { levelId: 'answer text' }

  // Total number of levels, now dynamically calculated
  const totalLevelsCount = computed(() => allCourseLevels.length);

  function markCompleted(levelId) {
    completedLevels.value.add(levelId);
  }

  function saveAnswer(levelId, text) {
    answers.value[levelId] = text;
  }

  // Getter to check if a specific level is completed
  function isLevelCompleted(levelId) {
    return completedLevels.value.has(levelId);
  }

  // Getter to retrieve a specific answer
  function getAnswerForLevel(levelId) {
    return answers.value[levelId] || ''; // Return empty string if no answer yet
  }

  // Updated progress calculation
  const progressPercentage = computed(() => {
    if (totalLevelsCount.value === 0) {
      return 0;
    }
    return Math.round((completedLevels.value.size / totalLevelsCount.value) * 100);
  });

  return {
    completedLevels, // Expose the set of completed level IDs
    answers,         // Expose all answers
    markCompleted,
    saveAnswer,
    isLevelCompleted,
    getAnswerForLevel,
    progressPercentage, // Use this for displaying overall course progress
    totalLevelsCount    // Expose total levels count if needed elsewhere
  };
});