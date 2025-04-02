<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()

// Form fields
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  console.log('Zaloguj')
  try {
    const isLoginSuccessful = await user.handleLogin(email.value, password.value)

    if (isLoginSuccessful) {
      router.push('/browse')
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex flex-col p-8 bg-black/50 rounded-md">
      <form @submit.prevent="handleLogin" class="flex flex-col">
        <h2 class="text-xl text-white">Zaloguj się</h2>
        <input
          v-model="email"
          type="text"
          placeholder="E-mail lub numer telefonu komórkowego"
          required
        />
        <input v-model="password" type="password" placeholder="Hasło" required />
        <button>Zaloguj się</button>
        <!-- <label for="">
          <input type="checkbox" />
          <span>Zapamiętaj mnie</span>
        </label> -->
      </form>

      <p>Nie masz jeszcze konta w Netflix?</p>
      <RouterLink to="/register">Zarejestruj się teraz</RouterLink>
    </div>
  </section>
</template>
