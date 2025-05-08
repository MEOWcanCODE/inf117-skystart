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
            <h3>Courses</h3>
            <p>Course list and navigation coming soon.</p>
        </div>

        <div v-else-if="currentTab === 'projects'">
            <h3>Projects</h3>
            <p>Project cards and progress bars coming soon.</p>
        </div>

        <div v-else-if="currentTab === 'settings'">
            <h3>Settings</h3>
            <p>Settings form for email, phone, and password updates coming soon.</p>
        </div>
        </main>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    const currentTab = ref('dashboard')

  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    height: 100vh;
    font-family: sans-serif;
  }
  
  .sidebar {
    background: #fff;
    padding: 1.5rem;
    width: 200px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .sidebar-links div {
  cursor: pointer;
  padding: 0.5rem 0;
  width: 100%;
  border-radius: 6px;
  padding-left: 0.5rem;
  transition: background 0.2s;
}

.sidebar-links div:hover {
  background-color: #f0f0f0;
}

.sidebar-links .active {
  background-color: #ffe066; /* Skystart yellow */
  font-weight: bold;
}


  
  .logo {
    height: 35px;
    margin-bottom: 2rem;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .sidebar a.router-link-active {
    color: #000;
    font-weight: bold;
  }
  
  .main-content {
    flex: 1;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
  }
  </style>
  