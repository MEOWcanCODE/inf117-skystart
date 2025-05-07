<!--
  LoginPage.vue
  Org Admin login screen.
  Authenticates Org Admin and redirects to Org Dashboard on success.
-->

<template>
    <div class="login-page">
      <h1>Organization Admin Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  function login() {
    // Placeholder: always "succeeds"
    if (email.value && password.value) {
      router.push('/org-dashboard')
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: auto;
    padding-top: 100px;
  }
  </style>
  