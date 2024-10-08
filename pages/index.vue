<template>
  <div>
    <SectionStart />
    <SectionAbout />
    <SectionSkills />
    <SectionProjects />
    <SectionFeedbacks />
    <SectionContact />

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
    lang: 'pt'
  }
})
</script>
