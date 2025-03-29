<script setup lang="ts">
import LinkLogo from './LinkLogo.vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const isLoggedIn = user.userData.isLoggedIn
const route = useRoute()
</script>

<template>
  <nav class="fixed top-0 left-0 w-full flex gap-4 p-6">
    <!-- Zawsze widoczne logo Netflix -->
    <LinkLogo :class="isLoggedIn ? '' : 'mr-auto'" />

    <!-- Nawigacja dla podstrony logowania /login -->
    <div v-if="route.path.includes('login')"></div>

    <!-- Nawigacja dla niezalogowanego użytkownika -->
    <div v-else-if="isLoggedIn === false && route.path !== '/browse'">
      <RouterLink
        to="/login"
        class="py-2 px-4 bg-red-600 text-white font-medium rounded-md transition-all duration-150 hover:bg-red-700"
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
      </ul>
    </div>
  </nav>

  <p>{{ user.userData.isLoggedIn }}</p>
</template>
