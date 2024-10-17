<template>
  <UButton
    v-show="isScrollVisible"
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
const { isScrollVisible } = useScrollVisibility();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  navigateTo('/')
}
</script>
