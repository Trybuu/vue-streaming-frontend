<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation/NavigationBar.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-4 bg-gray-900 text-white">
    <NavigationBar />

    <RouterView />
  </div>
</template>
