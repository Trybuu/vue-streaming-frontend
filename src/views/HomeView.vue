<script setup lang="ts">
import CheckEmail from '@/components/CheckEmail.vue'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <main class="mx-auto min-h-screen w-screen max-w-[1920px]">
    <section
      class="w-content flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[url('@/assets/images/netflix-bg.jpg')] bg-cover bg-center p-8"
    >
      <div class="flex flex-col gap-4 text-center">
        <h1 class="mx-auto max-w-[50%] text-5xl font-bold">
          Filmy, seriale i wiele więcej bez ograniczeń
        </h1>
        <p class="font-medium">Już od 33 zł. Anuluj w każdej chwili.</p>
        <p>Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić konto.</p>
      </div>

      <CheckEmail />
    </section>

    <section>
      <h2 class="text-3xl font-medium">Popularne teraz</h2>
    </section>

    <section>
      <h2 class="text-3xl font-medium">Więcej powodów, aby dołączyć</h2>
    </section>

    <section>
      <h2 class="text-3xl font-medium">Często zadawane pytania</h2>
    </section>
  </main>
</template>
