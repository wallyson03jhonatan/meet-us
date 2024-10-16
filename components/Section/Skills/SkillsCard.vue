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
import { useVisibilityObserver } from '~/composables/useVisibilityObserver';

defineProps<{
    info: {
        title: string,     
        icon: string,
    } 
}>()

const { isVisible: isCardSkillVisible, observeVisibility } = useVisibilityObserver();
const cardSkillRef = ref<HTMLElement | null>(null);

observeVisibility(cardSkillRef);
</script>

<style scoped>
.translateX-card {
    opacity: 0;
    transform: translateY(100%);
    transition: ease-out 0.8s, opacity 0.6s;
}

.translateX-card--visible {
    opacity: 1;
    transform: translateY(0);
}
</style>