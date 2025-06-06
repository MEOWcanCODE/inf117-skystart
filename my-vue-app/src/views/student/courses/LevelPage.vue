<template>
  <div v-if="level" class="lesson-page">
    <div class="lesson-card">
      <div class="lesson-info">
        <h3>{{ level.title }}</h3>
        <p class="subtitle">{{ level.subtitle }}</p>
        <div class="description" v-html="level.description"></div>

        <div v-if="!level.levelType && level.requiresInput !== false">
          <label v-if="level.questionLabel" class="question-label">{{ level.questionLabel }}</label>
          <p v-if="level.questionDescription" class="question-desc">{{ level.questionDescription }}</p>
          <textarea v-model="singleAnswer" placeholder="Type your answer here"></textarea>
          <button class="submit-btn" @click="handleSubmitSingleAnswer">Submit Answer</button>
          <p v-if="level.hint" class="hint">Hint: {{ level.hint }}</p>
        </div>

        <div v-if="level.levelType === 'credentials'" class="credentials-section">
          <div style="margin-top:1.5rem; border-top: 1px solid #eee; padding-top:1rem;">
            <strong>Setup Checklist & Login Information</strong>
            <p>Use the table below to enter and save your login info for your own records. <strong>We recommend using a secure password manager.</strong></p>
            <table class="credentials-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">Canva</a></td>
                  <td><input type="email" v-model="canvaEmail" placeholder="Canva Email"></td>
                  <td class="password-cell">
                    <input :type="passwordVisibility.canva ? 'text' : 'password'" v-model="canvaPassword" placeholder="Canva Password">
                    <span class="visibility-toggle" @click="togglePasswordVisibility('canva')">👁️</span>
                  </td>
                </tr>
                <tr>
                  <td><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a></td>
                  <td><input type="email" v-model="chatGptEmail" placeholder="ChatGPT Email"></td>
                  <td class="password-cell">
                    <input :type="passwordVisibility.chatGpt ? 'text' : 'password'" v-model="chatGptPassword" placeholder="ChatGPT Password">
                    <span class="visibility-toggle" @click="togglePasswordVisibility('chatGpt')">👁️</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="submit-btn" @click="handleSaveCredentials">Mark Done</button>
        </div>

        <button
          v-if="!level.levelType && level.requiresInput === false"
          class="submit-btn"
          @click="handleMarkDone"
        >
          Mark Done
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading level data...</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useProgressStore } from '../../../stores/progressStore';

const props = defineProps({
  level: { type: Object, default: null }
});

const progress = useProgressStore();

// --- State for different level types ---
const singleAnswer = ref('');
const canvaEmail = ref('');
const canvaPassword = ref('');
const chatGptEmail = ref('');
const chatGptPassword = ref('');
const passwordVisibility = ref({ canva: false, chatGpt: false });

// --- Methods ---
function handleSubmitSingleAnswer() {
  if (!props.level?.id) return;
  progress.saveAnswer(props.level.id, singleAnswer.value);
  progress.markCompleted(props.level.id);
  alert('Answer saved and progress updated!');
}

function handleMarkDone() {
  if (!props.level?.id) return;
  progress.markCompleted(props.level.id);
  alert('Level marked as done!');
}

function handleSaveCredentials() {
  if (!props.level?.id) return;
  const credentials = {
    canvaEmail: canvaEmail.value,
    canvaPassword: canvaPassword.value,
    chatGptEmail: chatGptEmail.value,
    chatGptPassword: chatGptPassword.value
  };
  progress.saveAnswer(props.level.id, JSON.stringify(credentials));
  progress.markCompleted(props.level.id);
  alert('Login info saved and level marked as done!');
}

function togglePasswordVisibility(platform) {
  passwordVisibility.value[platform] = !passwordVisibility.value[platform];
}

// --- Watcher to load data when the level changes ---
watch(() => props.level?.id, (newId) => {
  if (!newId) return;
  const savedAnswer = progress.answers[newId] || '';

  if (props.level.levelType === 'credentials') {
    singleAnswer.value = ''; // Clear other answer types
    try {
      const savedCredentials = JSON.parse(savedAnswer);
      if (typeof savedCredentials === 'object' && savedCredentials !== null) {
        canvaEmail.value = savedCredentials.canvaEmail || '';
        canvaPassword.value = savedCredentials.canvaPassword || '';
        chatGptEmail.value = savedCredentials.chatGptEmail || '';
        chatGptPassword.value = savedCredentials.chatGptPassword || '';
      } else { throw new Error('Not an object'); }
    } catch (e) {
      // It's not valid JSON, so clear the fields
      canvaEmail.value = '';
      canvaPassword.value = '';
      chatGptEmail.value = '';
      chatGptPassword.value = '';
    }
  } else {
    // It's a normal level
    singleAnswer.value = savedAnswer;
    canvaEmail.value = '';
    canvaPassword.value = '';
    chatGptEmail.value = '';
    chatGptPassword.value = '';
  }
}, { immediate: true });
</script>

<style scoped>
.lesson-page { padding: 1rem; }
.lesson-card { background-color: #fff; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.lesson-info h3 { margin-top: 0; margin-bottom: 0.5rem; }
.subtitle { color: #666; margin-bottom: 1rem; font-style: italic; }
.description { margin-bottom: 1.5rem; line-height: 1.6; }
textarea { width: 100%; min-height: 100px; padding: 0.75rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-bottom: 1rem; }
.submit-btn { display: inline-block; padding: 0.75rem 1.5rem; background-color: #ffcc00; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 1rem; }
.submit-btn:hover { background-color: #e6b800; }

/* Styles for the new credentials table */
.credentials-table { width: 100%; border-collapse: collapse; text-align: left; margin-top: 1rem; }
.credentials-table th, .credentials-table td { padding: 8px; border: 1px solid #ddd; vertical-align: middle; }
.credentials-table thead { background-color:#f2f2f2; }
.credentials-table input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.password-cell { position: relative; }
.visibility-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
}
</style>