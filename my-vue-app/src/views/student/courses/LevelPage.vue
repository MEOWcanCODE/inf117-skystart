<template>
  <div v-if="level" class="lesson-page">
    <div class="lesson-card">
      <div class="lesson-info">
        <h3>{{ level.title }}</h3>
        <p class="subtitle">{{ level.subtitle }}</p>
        <div class="description" v-html="formattedDescription"></div>

        <label v-if="level.questionLabel" class="question-label">{{ level.questionLabel }}</label>
        <p v-if="level.questionDescription" class="question-desc">{{ level.questionDescription }}</p>

        <textarea
          v-if="level.requiresInput !== false"
          v-model="currentAnswer"
          placeholder="Type your answer here"
        ></textarea>

        <button
          v-if="level.requiresInput === false"
          class="submit-btn"
          @click="handleMarkDone"
        >
          Mark Done
        </button>

        <button
          v-if="level.requiresInput !== false"
          class="submit-btn"
          @click="handleSubmitAnswer"
        >
          Submit Answer
        </button>

        <p v-if="level.hint" class="hint">Hint: {{ level.hint }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading level data or level not found...</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch, computed } from 'vue';
import { useProgressStore } from '../../../stores/progressStore'; //

const props = defineProps({
  level: {
    type: Object,
    default: null
  }
});

const router = useRouter();
const currentAnswer = ref('');
const progress = useProgressStore(); //

const formattedDescription = computed(() => {
  return props.level && props.level.description
    ? props.level.description.replace(/\n/g, '<br />')
    : '';
});

function handleSubmitAnswer() {
  if (!props.level || typeof props.level.id === 'undefined') {
    console.error("LevelPage: Cannot submit answer, level or level.id is undefined.");
    return;
  }
  progress.saveAnswer(props.level.id, currentAnswer.value); //
  progress.markCompleted(props.level.id); //
  alert('Answer saved and progress updated!');
}

function handleMarkDone() {
  if (!props.level || typeof props.level.id === 'undefined') {
    console.error("LevelPage: Cannot mark done, level or level.id is undefined.");
    return;
  }
  progress.markCompleted(props.level.id); //
  alert('Level marked as done and progress updated!');
}


watch(currentAnswer, (newVal) => {
  if (props.level && typeof props.level.id !== 'undefined' && newVal?.trim()) {
    // Consider if auto-completing on any text input is desired.
    // progress.markCompleted(props.level.id); // Currently commented out
  }
});

watch(
  () => props.level?.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      currentAnswer.value = progress.answers[newId] || ''; //
    } else if (!newId) {
      currentAnswer.value = '';
    }
  },
  { immediate: true }
);
</script>

<style scoped>

.lesson-page {
  padding: 1rem;
}
/* .lesson-nav related styles can be removed if not used elsewhere */

.lesson-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
/* .video-placeholder styles can be removed if not used elsewhere */

.lesson-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.subtitle {
  color: #666;
  margin-bottom: 1rem;
  font-style: italic;
}
.description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.question-label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.25rem;
}
.question-desc {
  margin-bottom: 0.75rem;
}
textarea {
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 1rem;
}
.submit-btn {
  padding: 0.75rem 1.5rem;
  background-color: #ffcc00; /* Example Skystart yellow */
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.submit-btn:hover {
  background-color: #e6b800;
}
.hint {
  font-size: 0.9em;
  color: #777;
  margin-top: 1rem;
  font-style: italic;
}
</style>