<template>
    <UButton
    icon="i-lucide:arrow-up"
    :title="t('voltarAoTopo')"
    size="md"
    color="white"
    variant="outline"
    class="fixed bottom-4 right-4 animate-bounce"
    square
    @click="scrollToTop"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>