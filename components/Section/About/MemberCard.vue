<template>
  <div ref="cardMemberRef" :class="{ 'flip-card--visible': isCardMemberVisible }" class="flip-card">
    <UCard :ui="ui">
      <div class="flex flex-col items-center gap-4">
        <NuxtImg :src="member.avatar" :alt="`${member.name} Avatar`" height="80" width="80"
          class="max-h-20 max-w-20 rounded-full" format="webp" />
        <div class="text-center">
          <h3 class="font-medium">{{ member.name }}</h3>
          <p class="text-sm">{{ member.profession }}</p>
        </div>
      </div>

      <p class="text-justify mt-4">{{ member.bio }}</p>

      <div class="flex justify-around w-full mt-4">
        <ULink v-for="link in member.links" :key="link.url" :to="link.url" target="_blank" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          {{ link.title }}
        </ULink>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { useVisibilityObserver } from '~/composables/useVisibilityObserver';

defineProps<{
  member: {
    avatar: string
    name: string
    profession: string
    bio: string
    links: {
      title: string
      url: string
      icon: string
    }[]
  }
}>()

const ui = {
  body: {
    base: 'h-full min-h-[452px] flex flex-col items-center justify-center gap-8 shadow-md',
  },
}

const { isVisible: isCardMemberVisible, observeVisibility } = useVisibilityObserver();
const cardMemberRef = ref<HTMLElement | null>(null);

observeVisibility(cardMemberRef);

</script>

<style scoped>
.flip-card {
  opacity: 0;
  transform: rotateY(180deg);
  transition: transform 1.5s;
}

.flip-card--visible {
  opacity: 1;
  transform: rotateY(0);
}
</style>
