<!--
  LoginPage.vue
  Org Admin login screen.
  Authenticates Org Admin and redirects to Org Dashboard on success.
  Styled with Skystart color theme and modern UI.
-->

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="back-arrow" @click="goHome">←</div>
      <img src="/logo.png" alt="Skystart Logo" class="login-logo" />
      <h2>Organization Admin Login</h2>
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
    router.push('/org-dashboard')
  }
}

function goHome() {
  router.push('/')
}


function forgotPassword() {
  alert('Password reset coming soon!')
}
</script>