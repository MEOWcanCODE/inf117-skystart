<!--
  StudentSettings.vue
  Displays user's email, phone, and password with edit buttons styled like Figma.
  Includes popup modal for editing fields.
-->

<template>
  <div class="settings-wrapper">
    <h2>Settings</h2>
    <p class="section-label">My Details</p>

    <div class="settings-grid">
      <div class="field">
        <label>Email:</label>
        <span>[User's Email]</span>
      </div>
      <button class="edit-btn" @click="activePopup = 'email'">Change email</button>

      <div class="field">
        <label>Phone number:</label>
        <span>[User's Phone Number]</span>
      </div>
      <button class="edit-btn" @click="activePopup = 'phone'">Change phone number</button>

      <div class="field">
        <label>Password:</label>
        <span>**********</span>
      </div>
      <button class="edit-btn" @click="activePopup = 'password'">Change password</button>
    </div>
  </div>

  <!-- Popup Modal -->
  <div v-if="activePopup" class="popup-overlay">
    <div class="popup-card">
      <button class="close-btn" @click="activePopup = null">×</button>

      <h3 v-if="activePopup === 'email'">Change Email</h3>
      <h3 v-else-if="activePopup === 'phone'">Change Phone Number</h3>
      <h3 v-else-if="activePopup === 'password'">Change Password</h3>

      <input
        v-if="activePopup !== 'password'"
        type="text"
        placeholder="Enter new value"
      />
      <div v-else>
        <input type="password" placeholder="Current password" />
        <input type="password" placeholder="New password" style="margin-top: 0.5rem" />
      </div>

      <button class="save-btn">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activePopup = ref(null)
</script>

<style scoped>
.settings-wrapper {
  background-color: #f5f5f5;
  padding: 2rem;
  font-family: sans-serif;
  min-height: 100vh;
}

h2 {
  margin-bottom: 0.5rem;
}

.section-label {
  font-weight: bold;
  margin-bottom: 1rem;
}

.settings-grid {
  background-color: #e5e5e5;
  padding: 2rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 1.25rem;
  column-gap: 2rem;
  max-width: 600px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field label {
  font-weight: 600;
  font-size: 0.95rem;
}

.field span {
  font-size: 0.9rem;
  color: #333;
}

.edit-btn {
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 6px;
  border: 1px solid #999;
  background: white;
  cursor: pointer;
}

/* Modal */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 350px;
  max-width: 90%;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popup-card input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 0.9rem;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}

.save-btn {
  background-color: #ffe066;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>
