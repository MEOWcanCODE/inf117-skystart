<!-- Mission Statement -->

<template>
  <div class="home-container">
    <div class="mission-statement">
      <header class="nav-bar">
        <img src="/logo.png" alt="Skystart Logo" class="logo" />
        <div class="nav-links">
          <button @click="goToMissionStatement">Our Mission</button>  
          <button @click="goToContact">Contact</button>
        </div>
      </header>

      <main>
        <h2>Mission Statement</h2>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

  function goToContact() {
  router.push('/contact-us')
  }

  function goToMissionStatement(){
    router.push('/mission-statement')
  }

function handleSubmit() {
  alert(`Thank you, ${form.firstName}! Your message has been sent.`)
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.home-container {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.contact-info {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* centers content horizontally */
  text-align: center;  /* centers the heading */
}

.contact-info h2 {
  margin-bottom: 1.5rem;
}

.contact-form {
  width: 100%; /* full width within max-width container */
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fafafa;
  box-sizing: border-box;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  text-align: left;
}

input,
textarea {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #bbb;
  border-radius: 4px;
  resize: vertical;
}

button[type="submit"] {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: #0078d7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button[type="submit"]:hover {
  background-color: #005a9e;
}
</style>
