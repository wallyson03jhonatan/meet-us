<template>
    <div ref="cardCustomerRef" :class="{ 'translateX-card--visible': isCardCustomerVisible }" class="translateX-card">
        <UCard :ui="ui">

            <div class="flex flex-col items-center gap-4">
                <NuxtImg :src="feedbackInfo.avatar" :alt="`${feedbackInfo.name} Avatar`" height="80" width="80"
                class="max-h-20 max-w-20 rounded-full" format="webp" />
                <div class="text-center">
                    <h3 class="font-medium">{{ feedbackInfo.name }}</h3>
                    <p class="text-sm">{{ feedbackInfo.profession }}</p>
                </div>
            </div>

            <div class="hidden md:flex flex-col gap-2">
                <UProgress :value="feedbackInfo.rating" :max="100" class="text-justify" color="blue">
                    <template #indicator="{ percent }">
                        <div class="text-right" :style="{ width: `${percent}%` }">
                            <span class="text-blue-500 dark:text-white font-semibold">
                                {{ feedbackInfo.rating }}% {{ $t("feedbackRating") }}!
                            </span>
                        </div>
                    </template>
                </UProgress>
                <p class="text-justify">{{ feedbackInfo.feedback }}</p>
            </div>

            <p class="md:hidden text-justify mt-4">{{ feedbackInfo.feedback }}</p>

            <UProgress :value="feedbackInfo.rating" :max="100" class="md:hidden text-justify mt-4" color="blue">
                <template #indicator="{ percent }">
                    <div class="text-right" :style="{ width: `${percent}%` }">
                        <span class="text-blue-500 dark:text-white font-semibold">
                            {{ feedbackInfo.rating }}% {{ $t("feedbackRating") }}!
                        </span>
                    </div>
                </template>
            </UProgress>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useVisibilityObserver } from '~/composables/useVisibilityObserver';

defineProps<{
    feedbackInfo: {
        avatar: string
        name: string
        profession: string
        feedback: string
        rating: number
    }
}>()

const ui = {
    background: 'bg-white dark:bg-gray-800/50',
    rounded: 'rounded-xl',
    body: {
        base: 'h-full min-h-[300px] min-w-full flex flex-col md:flex-row items-center justify-center md:px-8 gap-8',
    },
}

const { isVisible: isCardCustomerVisible, observeVisibility } = useVisibilityObserver();
const cardCustomerRef = ref<HTMLElement | null>(null);

observeVisibility(cardCustomerRef);
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
