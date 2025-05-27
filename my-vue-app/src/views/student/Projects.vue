<!--
  StudentProjects.vue
  Styled project list view for student users, matching dashboard layout and Figma UI.
-->

<template>
  <!-- Project dashboard -->
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
        <button class="view-button" @click="$emit('open-project', project)">View project</button>
      </div>
    </div>
  </div>

  <!-- Selected item for each project -->
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
defineEmits(['open-project'])
const selectedProject = ref(null)
const router = useRouter()
</script>