import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userData = reactive({
    isLoggedIn: false,
  })

  function logIn() {
    userData.isLoggedIn = true
  }
  function logOut() {
    userData.isLoggedIn = false
  }

  return { userData, logIn, logOut }
})
