<template>
    <div ref="projectCardRef" :class="{ 'translateX-card--visible': isProjectCardVisible }" class="translateX-card">
        <UCard :ui="ui">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-4">
                    <h3 class="font-semibold">{{ project.title }}</h3>
                    <p class="text-sm dark:text-gray-300">{{ project.description }}</p>
                </div>

                <div>
                    <span class="text-sm font-medium">{{ $t("projetosStackDescricao") }}</span>
                    <div class="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <UBadge v-for="item, index in project.stack" :key="index" :label="item" variant="soft" color="blue" size="sm" class="justify-center" />
                    </div>
                </div>

                <div class="flex gap-4 items-center">
                    <UButton v-if="project.deploy" :to="project.deploy" icon="i-lucide:link" size="md" color="gray" variant="solid" label="Deploy" :trailing="false" />
                    <UButton v-if="project.github" :to="project.github" icon="i-logos:git-icon" size="md" color="gray" variant="solid" label="Github" :trailing="false" />
                </div>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useVisibilityObserver } from '~/composables/useVisibilityObserver';

defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    deploy: string;
    github: string;
    stack: string[];
  }
}>()

const ui = {
    base: 'flex justify-center items-center min-h-[400px] max-h-fit',
    background: 'bg-white dark:bg-gray-800/50',
    rounded: 'rounded-xl',
    body: {
        base: 'min-w-full',
    },
    header: {
        padding: 'p-0 sm:px-0',
    },
}

const { isVisible: isProjectCardVisible, observeVisibility } = useVisibilityObserver();
const projectCardRef = ref<HTMLElement | null>(null);

observeVisibility(projectCardRef);
</script>

<style scoped>
.translateX-card {
    opacity: 0;
    transform: translateX(-100%);
    transition: ease-in 0.8s, opacity 0.6s;
}

.translateX-card--visible {
    opacity: 1;
    transform: translateX(0);
}
</style>