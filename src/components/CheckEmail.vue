<script setup lang="ts">
import SolidButton from './buttons/SolidButton.vue'
</script>

<template>
  <form action="" class="flex w-full flex-col gap-2 sm:flex-row md:max-w-[35%]">
    <input
      type="text"
      placeholder="Adres e-mail"
      class="w-full rounded-sm border border-gray-500 px-2 py-4 text-white outline-white"
    />
    <SolidButton>Rozpocznij <i class="pi pi-angle-right"></i></SolidButton>
  </form>
</template>
