<template>
  <UContainer as="section" id="about-us" class="scroll-mt-28">

    <div class="text-center">
      <h2 class="font-semibold text-4xl">Conheça nosso time</h2>
      <p class="mt-1 font-normal">Conheça os rostos dos bastidores e aprenda sobre os valores que nos movem.</p>
    </div>

    <div class="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

      <template v-if="loading">
        <USkeleton class="min-h-[300px] min-w-full" />
        <USkeleton class="min-h-[300px] min-w-full" />
      </template>

      <template v-else>      
        <SectionAboutMemberCard :member="memberMaya" ref="cardMember1" />

        <SectionAboutMemberCard :member="memberMaya" ref="cardMember2" />

        <SectionAboutMemberCard :member="memberMaya" ref="cardMember3" />
       
      </template>

    </div>

  </UContainer>
</template>

<script setup lang="ts">
const memberMaya =  {
  avatar: 'https://images.unsplash.com/photo-1602146460372-dfa316e031a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Maya O.',
  profession: 'Dev Fullstack DevOps Security Manager',
  bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sit ipsa minima ipsum nam unde, magni assumenda voluptatum at dolore nobis reprehenderit, aspernatur nihil est sint praesentium vel architecto facilis.',
  links: [
    {
      title: 'Github',
      url: 'https://github.com/wallyson03jhonatan',
      icon: ''
    },
    {
      title: 'Linkedin',
      url: '',
      icon: '',
    },
    {
      title: 'Instagram',
      url: '',
      icon: '',
    }
  ]
}

const loading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
