<template>
  <UContainer as="section" id="about-us" class="mt-32">

    <div class="text-center">
      <h2 class="font-semibold text-4xl">Conheça nosso time</h2>
      <p class="mt-1 font-normal">Conheça os rostos dos bastidores e aprenda sobre os valores que nos movem.</p>
    </div>

    <div class="my-16 grid grid-cols-1 md:grid-cols-2 gap-16">

      <template v-if="loading">
        <USkeleton class="min-h-[300px] min-w-full" />
        <USkeleton class="min-h-[300px] min-w-full" />
      </template>

      <template v-else>
        <div ref="cardMember1" :class="{ 'flip-visible': isCardMember1Visible }" class="flip-card">
          <UCard :ui="ui">
            <div class="flex flex-col items-center gap-4">
              <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/95327182?v=4" alt="Avatar" />
              <div class="text-center">
                <h3 class="font-medium">Wallyson O.</h3>
                <p class="text-sm">Desenvolvedor de Software</p>
              </div>
            </div>

            <p class="text-justify mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sit ipsa minima ipsum nam unde, magni
              assumenda voluptatum at dolore nobis reprehenderit, aspernatur nihil est sint praesentium vel architecto
              facilis.
            </p>

            <div class="flex justify-around w-full mt-4">
              <ULink to="https://github.com/wallyson03jhonatan" target="_blank" active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Github
              </ULink>
              <ULink active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Linkedin
              </ULink>
              <ULink active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Instagram
              </ULink>
            </div>
          </UCard>
        </div>

        <div ref="cardMember2" :class="{ 'flip-visible': isCardMember2Visible }" class="flip-card">
          <UCard :ui="ui">
            <div class="flex flex-col items-center gap-4">
              <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/85066396?v=4" alt="Avatar" />
              <div class="text-center">
                <h3 class="font-medium">Marcelli S.</h3>
                <p class="text-sm">Software Engineer Analys</p>
              </div>
            </div>

            <p class="text-justify mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sit ipsa minima ipsum nam unde, magni
              assumenda voluptatum at dolore nobis reprehenderit, aspernatur nihil est sint praesentium vel architecto
              facilis.
            </p>

            <div class="flex justify-between w-full mt-4">
              <ULink active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Github
              </ULink>
              <ULink active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Linkedin
              </ULink>
              <ULink active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Instagram
              </ULink>
            </div>
          </UCard>
        </div>
      </template>

    </div>

  </UContainer>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const ui = {
  body: {
    base: 'h-full flex flex-col items-center justify-center gap-8 shadow-md',
  },
}

const cardMember1 = ref(null)
const cardMember2 = ref(null)

const isCardMember1Visible = ref<boolean>(false)
const isCardMember2Visible = ref<boolean>(false)

const isMobile = ref(false)
const thresholdValue = ref(0) 

const loading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);

  isMobile.value = window.innerWidth < 768

  thresholdValue.value = isMobile.value ? 0.75 : 0

  useIntersectionObserver(
    cardMember1, 
    ([{ isIntersecting }]) => {
      isCardMember1Visible.value = isIntersecting
    },
    {
      threshold: thresholdValue.value,
    }
  )

  useIntersectionObserver(
    cardMember2,
    ([{ isIntersecting }]) => {
      isCardMember2Visible.value = isIntersecting
    },
    {
      threshold: thresholdValue.value,
    }
  )
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