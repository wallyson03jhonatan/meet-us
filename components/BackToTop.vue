<template>
  <UButton
    v-show="isButtonVisible"
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
const isButtonVisible = ref<boolean>(false);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  navigateTo('/')
}

function updateButtonVisibility() {
  isButtonVisible.value = window.scrollY > (window.innerHeight / 2); 
}

onMounted(() => {
  window.addEventListener('scroll', updateButtonVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateButtonVisibility);
});

</script>
