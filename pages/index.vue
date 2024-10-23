<template>
  <div>
    <main>
      <SectionStart />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
      <SectionFeedbacks />
      <SectionContact />
    </main>

    <Footer />

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
    lang: 'en'
  }
})
</script>
