<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation/NavigationBar.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <NavigationBar />

    <RouterView />
  </div>
</template>
