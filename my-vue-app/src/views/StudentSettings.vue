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
