<!--
  StudentDashboard.vue
  Main landing page for student users.
  Displays user-specific metrics, mentor info, course list, and upcoming deadlines.
-->

<template>
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
        <StudentCourses />
      </div>

      <div v-else-if="currentTab === 'projects'">
        <StudentProjects />
      </div>

      <div v-else-if="currentTab === 'settings'">
        <StudentSettings />
      </div>
    </main>
  </div>
</template>

  
  <script setup>
  import StudentProjects from '../views/StudentProjects.vue'
  import StudentCourses from '../views/StudentCourses.vue'
  import StudentSettings from '../views/StudentSettings.vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const currentTab = ref('dashboard')

  onMounted(() => {
    if (route.query.tab) {
      currentTab.value = route.query.tab
    }
  })


  </script>
  
