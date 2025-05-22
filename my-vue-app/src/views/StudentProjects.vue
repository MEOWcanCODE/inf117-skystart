<!--
  StudentProjects.vue
  Styled project list view for student users, matching dashboard layout and Figma UI.
-->

<template>
  <div class="projects-wrapper">
    <div class="project-card" v-for="n in 3" :key="n">
      <div class="project-image"></div>
      <div class="project-details">
        <h3>Project name</h3>
        <p>Course description blah blah blah</p>
        <div class="progress-wrapper">
          <span class="progress-label">Current progress: <strong>40%</strong></span>
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
        </div>
        <button class="view-button" @click="router.push('/student-project-detail')">View project</button>
      </div>
    </div>
  </div>
  <div v-if="selectedProject" class="project-popup">
  <div class="popup-card">
    <button class="close-btn" @click="selectedProject = null">×</button>
    
    <h3>Project name</h3>
    <p>Project description, a short one</p>

    <button class="access-btn">Access website</button>

    <div class="metrics">
      <div>
        <h4>User metrics</h4>
        <p>Total active users: 3,241</p>
        <p>Total monthly users: 1,311</p>
      </div>
      <div>
        <h4>Monthly breakdown</h4>
        <p>Revenue: 1,222</p>
        <p>Profit: 1,000</p>
        <p>Debt after revenue: 59,231</p>
        <p>Debt to revenue ratio: 2:1</p>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const selectedProject = ref(null)
const router = useRouter()
</script>

<style scoped>
.projects-wrapper {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #e5e5e5;
  padding: 1rem;
  border-radius: 8px;
}

.project-card {
  display: flex;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
}

.project-image {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-right: 1rem;
}

.project-details {
  flex: 1;
}

.project-details h3 {
  margin: 0;
  font-size: 1.1rem;
}

.project-details p {
  margin: 0.25rem 0 0.75rem;
  font-size: 0.9rem;
  color: #555;
}

.progress-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.progress-label {
  font-size: 0.85rem;
  color: #333;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  width: 40%;
  height: 100%;
  background-color: #ffcc00;
}

.view-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
</style>
