<!--
  OrgDashboard.vue
  Main landing page for Organization Admin after login.
  Displays summary stats, navigation to org management, users, and reports.
-->

<template>
    <div class="org-dashboard">
      <h1>Organization Dashboard</h1>
      <p>Welcome back, Admin!</p>
      <ul>
        <li><router-link to="/org-users">Manage Users</router-link></li>
        <li><router-link to="/org-projects">Manage Projects</router-link></li>
        <li><router-link to="/org-reports">View Reports</router-link></li>
      </ul>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .org-dashboard {
    padding: 2rem;
  }
  </style>
  