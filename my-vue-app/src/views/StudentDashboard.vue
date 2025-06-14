<!--
  StudentDashboard.vue
  Main landing page for student users.
  Displays user-specific metrics, mentor info, course list, and upcoming deadlines.
-->

<template>
  <div v-if="showProjectModal" class="popup-overlay">
    <div class="popup-card">
      <button class="close-btn" @click="closeModal">×</button>
      <h3>{{ selectedProject?.title }}</h3>
      <p>{{ selectedProject?.description }}</p>
      <div class="metrics-card">
        <div class="column">
          <h2>User Metrics</h2>
          <div class="metric-row" v-for="(value, key) in selectedProject?.metrics" :key="key">
            <span>{{ key }}</span>
            <span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="dashboard-container">
    <aside class="sidebar">
      <img src="/logo.png" class="logo" alt="Skystart Logo" />
      <nav class="sidebar-links">
        <div :class="{ active: currentTab === 'dashboard' }" @click="currentTab = 'dashboard'">Dashboard</div>
        <div :class="{ active: currentTab === 'courses' }" @click="currentTab = 'courses'">Courses</div>
        <div :class="{ active: currentTab === 'projects' }" @click="currentTab = 'projects'">Projects</div>
        <div :class="{ active: currentTab === 'settings' }" @click="currentTab = 'settings'">Settings</div>
      </nav>
    </aside>

    <main class="main-content">
      <h2>Welcome, [User]</h2>

      <div v-if="currentTab === 'dashboard'" class="grid">
        <div class="card">Your Revenue:<br /><strong>$57,400</strong></div>
        <div class="card">Your Mentor:<br />[Mentor Name]<br />[Contact Info]</div>
        <div class="card">Enrolled Courses:<br />[List of courses]</div>
        <div class="card">Overall Progress:<br />[Progress Bar]</div>
        <div class="card">Active Courses:<br />[List of active courses]</div>
        <div class="card">Upcoming Deadlines:<br />[Assignment due dates]</div>
      </div>

      <div v-else-if="currentTab === 'courses'">
        <CoursePage />
      </div>

      <div v-else-if="currentTab === 'projects'">
        <StudentProjects @open-project="openProject" />
      </div>

      <div v-else-if="currentTab === 'settings'">
        <StudentSettings />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CoursePage from './student/courses/CoursePage.vue'
import StudentProjects from './student/Projects.vue'
import StudentSettings from './student/Settings.vue'

const route = useRoute()
const currentTab = ref('dashboard')
const showProjectModal = ref(false)
const selectedProject = ref(null)

onMounted(() => {
  if (route.query.tab) {
    currentTab.value = route.query.tab
  }
})

function openProject(project) {
  selectedProject.value = project
  showProjectModal.value = true
}

function closeModal() {
  showProjectModal.value = false
}
</script>
