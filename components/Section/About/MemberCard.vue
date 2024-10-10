<template>
  <div ref="cardMemberRef" :class="{ 'flip-visible': isCardMemberVisible }" class="flip-card">
    <UCard :ui="ui">
      <div class="flex flex-col items-center gap-4">
        <UAvatar size="3xl" :src="member.avatar" :alt="`${member.name} Avatar`" />
        <div class="text-center">
          <h3 class="font-medium">{{ member.name }}</h3>
          <p class="text-sm">{{ member.profession }}</p>
        </div>
      </div>

      <p class="text-justify mt-4">{{ member.bio }}</p>

      <div class="flex justify-around w-full mt-4">
        <ULink 
          v-for="link in member.links" 
          :key="link.url" 
          :to="link.url" 
          target="_blank" 
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ link.title }}
        </ULink>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

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

const cardMemberRef = ref<HTMLElement | null>(null)
const isCardMemberVisible = ref<boolean>(false)

const isMobile = ref<boolean>(false)
const thresholdValue = ref<number>(0)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  thresholdValue.value = isMobile.value ? 0.75 : 0

  useIntersectionObserver(
    cardMemberRef,
    ([{ isIntersecting }]) => {
      isCardMemberVisible.value = isIntersecting;
    },
    {
      threshold: thresholdValue.value,
    }
  );
});
</script>

<style scoped>
.flip-card {
  opacity: 0;
  transform: rotateY(180deg);
  transition: transform 0.8s, opacity 0.6s;
}

.flip-visible {
  opacity: 1;
  transform: rotateY(0);
}
</style>
