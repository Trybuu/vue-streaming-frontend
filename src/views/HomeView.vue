<script setup lang="ts">
import SolidButton from '@/components/buttons/SolidButton.vue'
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold">Filmy, seriale i wiele więcej bez ograniczeń</h1>
    <p>Już od 33 zł. Anuluj w każdej chwili.</p>
    <p>Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić konto.</p>

    <form action="">
      <input type="text" placeholder="Adres e-mail" />
      <SolidButton>Rozpocznij</SolidButton>
    </form>
  </section>
</template>
