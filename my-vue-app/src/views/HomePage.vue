<!--
  HomePage.vue
  Landing page with logo and navigation for Org Admin and Members.
  Includes top nav and primary login buttons.
-->
<template>
    <div class="home-container">
      <header class="nav-bar">
        <img src="/logo.png" alt="Skystart Logo" class="logo" @click="goHome"/>
        <div class="nav-links">
          <button>Our Mission</button>
          <button @click="goToContact">Contact</button>
        </div>
      </header>
  
      <main class="center-buttons">
        <button @click="goToOrgLogin">Organization Login</button>
        <button @click="goToMemberLogin">Member Login</button>
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  function goToContact() {
  router.push('/contact-us')
  }

  function goToOrgLogin() {
    router.push('/login')
  }
  
  function goToMemberLogin() {
  router.push('/member-login')
}

  </script>
  
  <style scoped>
  .home-container {
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .nav-bar {
    background-color: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    height: 40px;
  }
  
  .nav-links button {
    margin-left: 1rem;
    background: none;
    border: none;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }
  
  .center-buttons {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  
  .center-buttons button {
    padding: 1rem 2rem;
    background-color: #ffcc00;
    border: none;
    font-weight: bold;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  