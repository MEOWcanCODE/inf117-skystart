// src/stores/userStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const id = ref(null)
  const name = ref('')
  const username = ref('')
  const email = ref('')
  const type = ref('') // student, mentor, etc.
  const orgId = ref(null)
  const loggedIn = ref(false)

  function setUser(userData) {
    id.value = userData.id
    name.value = userData.name
    username.value = userData.username
    email.value = userData.email
    type.value = userData.type
    orgId.value = userData.orgId
    loggedIn.value = true
  }

  function clearUser() {
    id.value = null
    name.value = ''
    username.value = ''
    email.value = ''
    type.value = ''
    orgId.value = null
    loggedIn.value = false
  }

  async function fetchUser() {
  try {
    const res = await fetch('/api/user')
    if (!res.ok) throw new Error('Not authenticated')
    const data = await res.json()
    setUser(data)
  } catch (err) {
    console.error('Fetch user failed:', err)
    clearUser()
  }
}


  return {
    id,
    name,
    username,
    email,
    type,
    orgId,
    loggedIn,
    setUser,
    clearUser,
    fetchUser
  }
})
