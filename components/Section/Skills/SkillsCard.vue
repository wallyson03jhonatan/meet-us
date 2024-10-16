<template>
    <li  
        ref="cardSkillRef" 
        class="translateX-card p-4 gap-2 flex flex-col justify-center items-center rounded-xl shadow-lg bg-gray-100 dark:bg-gray-900"
        :class="{ 'translateX-card--visible': isCardSkillVisible }"
    >
        <span class="font-semibold">{{ info.title }}</span>
        <UIcon :name="info.icon" size="24" />
    </li>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
    info: {
        title: string,     
        icon: string,
    } 
}>()

const cardSkillRef = ref<HTMLElement | null>(null)
const isCardSkillVisible = ref<boolean>(false)

const isMobile = ref<boolean>(false)
const thresholdValue = ref<number>(0)

onMounted(() => {
    isMobile.value = window.innerWidth < 768
    thresholdValue.value = isMobile.value ? 0.75 : 0

    useIntersectionObserver(
        cardSkillRef,
        ([{ isIntersecting }]) => {
            isCardSkillVisible.value = isIntersecting;
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
    transform: translateX(100%);
    transition: ease-in-out 0.8s, opacity 0.6s;
}

.translateX-card--visible {
    opacity: 1;
    transform: translateX(0);
}
</style>