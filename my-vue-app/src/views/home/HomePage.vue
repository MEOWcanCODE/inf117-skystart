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
          <button @click="goToMissionStatement">Our Mission</button>  
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

  function goToMissionStatement(){
    router.push('/mission-statement')
  }

  function goToOrgLogin() {
    router.push('/login')
  }
  
  function goToMemberLogin() {
  router.push('/member-login')
}

  </script>