import { login, logout } from '@/api/authService'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userData = reactive({
    isLoggedIn: localStorage.getItem('authToken') ? true : false,
    authToken: localStorage.getItem('authToken') || '',
  })

  async function handleLogin(email: string, password: string) {
    try {
      const { data, message, status } = await login(email, password)
      console.log(data)
      if (data && data.token) {
        userData.isLoggedIn = true
        userData.authToken = data.token
        localStorage.setItem('authToken', data.token)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleLogout() {
    userData.isLoggedIn = false
    userData.authToken = ''
    logout()

    if (userData.isLoggedIn === false && userData.authToken === '') {
      return true
    }
  }

  return { userData, handleLogin, handleLogout }
})
