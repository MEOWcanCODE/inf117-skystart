<template>
  <div class="settings-wrapper">
    <h2>Settings</h2>
    <p class="section-label">My Details</p>
    <div class="settings-grid">
      <div class="field">
        <label>Email:</label>
        <span>{{ userEmail }}</span>
      </div>
      <button class="edit-btn" @click="openPopup('email')">Change email</button>
      <div class="field">
        <label>Phone number:</label>
        <span>{{ userPhone }}</span>
      </div>
      <button class="edit-btn" @click="openPopup('phone')">Change phone number</button>
      <div class="field">
        <label>Password:</label>
        <span>**********</span>
      </div>
      <button class="edit-btn" @click="openPopup('password')">Change password</button>
    </div>
    <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
  </div>
  <!-- Popup Modal -->
  <div v-if="activePopup" class="popup-overlay">
    <div class="popup-card">
      <button class="close-btn" @click="closePopup">×</button>
      <h3 v-if="activePopup === 'email'">Change Email</h3>
      <h3 v-else-if="activePopup === 'phone'">Change Phone Number</h3>
      <h3 v-else-if="activePopup === 'password'">Change Password</h3>
      <template v-if="activePopup !== 'password'">
        <input 
          v-model="newValue" 
          :type="activePopup === 'email' ? 'email' : 'tel'" 
          :placeholder="activePopup === 'email' ? 'Enter new email' : 'Enter new phone number'" 
        />
      </template>
      <template v-else>
        <input v-model="currentPassword" type="password" placeholder="Current password" />
        <input v-model="newPassword" type="password" placeholder="New password" style="margin-top: 0.5rem" />
      </template>
      <p v-if="validationError" class="validation-error">{{ validationError }}</p>
      <button class="save-btn" @click="saveChanges">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activePopup = ref(null)
const newValue = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const validationError = ref('')
const userEmail = ref('[User\'s Email]')
const userPhone = ref('[User\'s Phone Number]')

const openPopup = (field) => {
  activePopup.value = field
  newValue.value = ''
  currentPassword.value = ''
  newPassword.value = ''
  successMessage.value = ''
  errorMessage.value = ''
  validationError.value = ''
}

const closePopup = () => {
  activePopup.value = null
  validationError.value = ''
}

// Validation functions
const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return 'Email is required'
  }
  if (!email.includes('@')) {
    return 'Please enter a valid email address with @'
  }
  return null
}

const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return 'Phone number is required'
  }
  const phoneRegex = /^\d{10,}$/
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '') // Remove spaces, dashes, parentheses
  if (!phoneRegex.test(cleanPhone)) {
    return 'Phone number must contain at least 10 digits'
  }
  return null
}

const validatePassword = (currentPwd, newPwd) => {
  if (!currentPwd || currentPwd.trim() === '') {
    return 'Current password is required'
  }
  if (!newPwd || newPwd.trim() === '') {
    return 'New password is required'
  }
  if (newPwd.length < 6) {
    return 'New password must be at least 6 characters long'
  }
  return null
}

const saveChanges = () => {
  validationError.value = ''
  errorMessage.value = ''
  
  let validationResult = null
  let fieldName = ''
  let newVal = ''
  
  // Validate based on active popup
  if (activePopup.value === 'email') {
    validationResult = validateEmail(newValue.value)
    fieldName = 'email'
    newVal = newValue.value
  } else if (activePopup.value === 'phone') {
    validationResult = validatePhone(newValue.value)
    fieldName = 'phone number'
    newVal = newValue.value
  } else if (activePopup.value === 'password') {
    validationResult = validatePassword(currentPassword.value, newPassword.value)
    fieldName = 'password'
    newVal = newPassword.value
  }
  
  // Show validation error if any
  if (validationResult) {
    validationError.value = validationResult
    return
  }
  
  // Confirmation dialog
  const confirmMessage = `Are you sure you want to change your ${fieldName}?`
  if (!confirm(confirmMessage)) {
    return
  }
  
  // Simulate save operation (replace with actual API call)
  try {
    // Update the display values
    if (activePopup.value === 'email') {
      userEmail.value = newVal
    } else if (activePopup.value === 'phone') {
      userPhone.value = newVal
    }
    
    // Show success message
    successMessage.value = `Your ${fieldName} has been successfully updated!`
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
    
    // Close popup
    closePopup()
    
  } catch (error) {
    errorMessage.value = `Failed to update ${fieldName}. Please try again.`
  }
}
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

.success-msg {
  margin-top: 1.5rem;
  color: green;
  font-weight: 500;
  padding: 0.75rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 6px;
  max-width: 600px;
}

.error-msg {
  margin-top: 1.5rem;
  color: #721c24;
  font-weight: 500;
  padding: 0.75rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  max-width: 600px;
}

.validation-error {
  color: #dc3545;
  font-size: 0.85rem;
  margin: 0;
  padding: 0.25rem 0;
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
  box-sizing: border-box;
}

.popup-card input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
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
  transition: background-color 0.2s;
}

.save-btn:hover {
  background-color: #ffd43b;
}

.save-btn:active {
  background-color: #ffcc02;
}
</style>