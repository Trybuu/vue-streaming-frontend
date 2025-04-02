import api from '@/api/api'

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password })

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    console.error('Error in login request: ', err)
  }
}

export const logout = () => {
  localStorage.removeItem('authToken')
}
