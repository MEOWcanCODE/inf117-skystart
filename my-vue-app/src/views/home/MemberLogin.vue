<!--
  MemberLogin.vue
  Member login screen.
  Authenticates general users and redirects to their dashboard (to be implemented).
  Styled to match the Skystart design with theme colors and smooth UX.
-->

<template>
    <div class="login-container">
      <div class="login-box">
        <div class="back-arrow" @click="goHome">←</div>
        <img src="/logo.png" alt="Skystart Logo" class="login-logo" />
        <h2>Member Login</h2>
        <form @submit.prevent="login">
          <input v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p class="forgot" @click="forgotPassword">Forgot password?</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  function login() {
  if (email.value && password.value) {
    router.push('/student-dashboard') // route to student dashboard
  }
}

  
  function goHome() {
    router.push('/')
  }
  
  function forgotPassword() {
    alert('Password reset coming soon!')
  }
  </script>
  