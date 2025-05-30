<script setup>
import { ref, computed, watch } from 'vue'
import LevelPage from './LevelPage.vue'
import { levels } from '../../../data/levelData.js'
import { useProgressStore } from '../../../stores/progressStore'

const progress = useProgressStore()
const currentLevel = ref(levels[0])
const selectedProject = ref('Default Project') // You can replace with actual project logic

const groupedLevels = computed(() => {
  const groups = {}
  levels.forEach(level => {
    if (!groups[level.stage]) groups[level.stage] = []
    groups[level.stage].push(level)
  })
  return groups
})

function selectLevel(level) {
  currentLevel.value = level
}

function goToNextLevel() {
  const idx = levels.findIndex(l => l.id === currentLevel.value.id)
  if (idx !== -1 && idx < levels.length - 1) {
    currentLevel.value = levels[idx + 1]
  }
}

function goToPreviousLevel() {
  const idx = levels.findIndex(l => l.id === currentLevel.value.id)
  if (idx > 0) {
    currentLevel.value = levels[idx - 1]
  }
}

const hasPrevious = computed(() => {
  const idx = levels.findIndex(l => l.id === currentLevel.value.id)
  return idx > 0
})

const hasNext = computed(() => {
  const idx = levels.findIndex(l => l.id === currentLevel.value.id)
  return idx < levels.length - 1
})
</script>

<template>
  <div class="course-layout">
    <aside class="stage-column">
      <div style="margin-bottom: 1rem;">
        <label for="project-select">Project:</label>
        <select id="project-select" v-model="selectedProject">
          <option>Default Project</option>
          <option>Project A</option>
          <option>Project B</option>
        </select>
      </div>
      <div
        v-for="(stageLevels, stage) in groupedLevels"
        :key="stage"
        class="stage-block"
      >
        <h4 class="stage-title">{{ stage }}</h4>
        <div class="level-list">
          <div
            v-for="level in stageLevels"
            :key="level.id"
            class="level-item"
            :class="{ active: currentLevel.id === level.id }"
            @click="selectLevel(level)"
          >
            {{ level.title }}
            <span v-if="progress.completedLevels.has(level.id)">✅</span>
          </div>
        </div>
      </div>
    </aside>

    <section class="lesson-panel">
      <div class="level-nav">
        <button @click="goToPreviousLevel" :disabled="!hasPrevious">← Previous</button>
        <button @click="goToNextLevel" :disabled="!hasNext">Next →</button>
      </div>
      <LevelPage :level="currentLevel" @next="goToNextLevel" />
    </section>
  </div>
</template>

<style scoped>
.course-layout {
  display: flex;
  min-height: 100vh;
}

.stage-column {
  width: 300px;
  background-color: #f8f8f8;
  padding: 1rem;
  overflow-y: auto;
  border-right: 1px solid #ddd;
}

.project-dropdown {
  margin-bottom: 1rem;
}

.project-dropdown label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.stage-block {
  margin-bottom: 1.5rem;
}

.stage-title {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.level-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.level-item {
  padding: 0.4rem 0.75rem;
  background-color: #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.level-item:hover {
  background-color: #ddd;
}

.level-item.active {
  background-color: #ffe066;
  font-weight: bold;
}

.lesson-panel {
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
}

.level-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.level-nav button {
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: #ddd;
}

.level-nav button:disabled {
  background-color: #eee;
  cursor: not-allowed;
}
</style>
