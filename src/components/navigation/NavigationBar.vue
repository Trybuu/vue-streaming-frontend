<script setup lang="ts">
import LinkLogo from './LinkLogo.vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { computed } from 'vue'

const user = useUserStore()
const isLoggedIn = user.userData.isLoggedIn
const route = useRoute()

const handleLogout = async () => {
  try {
    const isLogoutSuccessful = await user.handleLogout()
    if (isLogoutSuccessful) {
      router.push('/')
    }
  } catch (err) {
    console.log(err)
  }
}

const computeMaxWidth = computed(() => {
  if (route.path !== '/browse') {
    return 'max-w-[1280px]'
  } else {
    return ''
  }
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full">
    <div :class="['mx-auto flex w-full gap-4 p-8', computeMaxWidth]">
      <!-- Zawsze widoczne logo Netflix -->
      <LinkLogo class="mr-auto" />

      <!-- Nawigacja dla podstrony logowania /login -->
      <div v-if="route.path.includes('login')"></div>

      <!-- Nawigacja dla niezalogowanego użytkownika -->
      <div v-else-if="isLoggedIn === false && route.path !== '/browse'">
        <RouterLink
          to="/login"
          class="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition-all duration-150 hover:bg-red-700"
          >Zaloguj się</RouterLink
        >
      </div>

      <!-- Nawigacja dla zalogowanego użytkownika -->
      <div v-else>
        <ul class="flex gap-4">
          <li><RouterLink to="/browse">Strona główna</RouterLink></li>
          <li><RouterLink to="/browse/series">Seriale</RouterLink></li>
          <li><RouterLink to="/browse/programs">Programy</RouterLink></li>
          <li><RouterLink to="/browse/movies">Filmy</RouterLink></li>
          <li><RouterLink to="/browse/my-list">Moja lista</RouterLink></li>
          <button @click="handleLogout">Wyloguj</button>
        </ul>
      </div>
    </div>
  </nav>
</template>
