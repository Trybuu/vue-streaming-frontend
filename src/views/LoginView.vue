<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()
const handleSubmit = () => {
  console.log('Zaloguj')
  user.logIn()
  router.push('/browse')
}
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex flex-col p-8 bg-black/50 rounded-md">
      <form @submit.prevent="handleSubmit" class="flex flex-col">
        <h2 class="text-xl text-white">Zaloguj się</h2>
        <input type="text" placeholder="E-mail lub numer telefonu komórkowego" />
        <input type="password" placeholder="Hasło" />
        <button>Zaloguj się</button>
        <label for="">
          <input type="checkbox" />
          <span>Zapamiętaj mnie</span>
        </label>
      </form>

      <p>Nie masz jeszcze konta w Netflix?</p>
      <RouterLink to="/register">Zarejestruj się teraz</RouterLink>
    </div>
  </section>
</template>
