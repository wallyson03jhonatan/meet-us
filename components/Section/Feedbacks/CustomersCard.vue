<template>
    <div ref="cardCustomerRef" :class="{ 'translateX-card--visible': isCardCustomerVisible }" class="translateX-card">
      <UCard :ui="ui">
        
        <div class="flex flex-col items-center gap-4">
          <UAvatar size="3xl" src="" alt="avatar" />
          <div class="text-center">
            <h3 class="font-medium">NOME</h3>
            <p class="text-sm">PROFISSAO</p>
          </div>
        </div>
  
        <div class="hidden md:flex flex-col gap-2">
            <p class="text-justify">STARS</p>
            <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odit facilis corporis, ipsam aperiam officiis molestias eaque, sint error ipsa, veniam nemo aliquid laudantium explicabo ea dolor delectus saepe hic cumque?
            </p>
        </div>

        <p class="md:hidden text-justify mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Odit facilis corporis, ipsam aperiam officiis molestias eaque, sint error ipsa, veniam nemo aliquid laudantium explicabo ea dolor delectus saepe hic cumque?
        </p>
  
        <p class="md:hidden text-justify mt-4">STARS</p>

      </UCard>
    </div>
  </template>
  
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const ui = {
    rounded: 'rounded-xl',
    body: {
        base: 'h-full min-h-[300px] min-w-full flex flex-col md:flex-row items-center justify-center md:px-8 gap-8',
    },
}

const cardCustomerRef = ref<HTMLElement | null>(null)
const isCardCustomerVisible = ref<boolean>(false)

const isMobile = ref<boolean>(false)
const thresholdValue = ref<number>(0)

onMounted(() => {
    isMobile.value = window.innerWidth < 768
    thresholdValue.value = isMobile.value ? 0.75 : 0

    useIntersectionObserver(
        cardCustomerRef,
        ([{ isIntersecting }]) => {
            isCardCustomerVisible.value = isIntersecting;
        },
        {
            threshold: thresholdValue.value,
        }
    );
});
</script>
  
<style scoped>
.translateX-card {
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.5s, opacity 0.6s;
}

.translateX-card--visible {
    opacity: 1;
    transform: translateX(0);
}
</style>
  
