<template>
  <div>

    <section id="about-us" class="h-screen border border-blue-500">SEÇÃO SOBRE</section>
    <section id="projects" class="h-screen my-12 border border-blue-500">SEÇÃO DE PROJETOS</section>
    <section id="contact-us" class="h-screen my-12 border border-blue-500">SEÇÃO DE Contato</section>

    <footer class="border border-blue-500" style="height: calc(100vh/4);">FOOTER</footer>

    <BackToTop />

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Meet-us',
  description: 'Need a good devs? Then meet us!'
})

useHead({
  htmlAttrs: {
    lang: 'pt'
  }
})
</script>
