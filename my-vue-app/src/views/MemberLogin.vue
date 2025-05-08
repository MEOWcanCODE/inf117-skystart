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
  
  <style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-box {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .login-box h2 {
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  form input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  
  form button {
    width: 100%;
    padding: 0.75rem;
    background-color: #ffcc00;
    color: #000;
    border: none;
    font-weight: bold;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  form button:hover {
    background-color: #ffa600;
  }
  
  .forgot {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .back-arrow {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
    cursor: pointer;
    text-align: left;
    transition: color 0.2s ease;
    border-radius: 50%;
    width: fit-content;
    padding: 0.25rem 0.5rem;
  }
  
  .back-arrow:hover {
    color: #333;
    background-color: #eee;
  }
  
  .login-logo {
    height: 50px;
    margin-bottom: 1rem;
  }
  </style>
  