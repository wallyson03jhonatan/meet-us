<template>
  <UContainer as="section" id="about-us" class="py-16 scroll-mt-24">

    <div class="text-center">
      <h2 class="font-semibold text-4xl">{{ $t("sobreTitulo") }}</h2>
      <p class="mt-1 font-normal">{{ $t("sobreDescricao") }}</p>
    </div>

    <div class="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

      <template v-if="loading">
        <USkeleton class="min-h-[300px] min-w-full" />
        <USkeleton class="min-h-[300px] min-w-full" />
        <USkeleton class="min-h-[300px] min-w-full" />
      </template>

      <template v-else>      
        <SectionAboutMemberCard 
          v-for="member, key in membersValue" 
          :key="key" 
          :member="member" 
          :ref="member.id.toString()" 
        />
      </template>

    </div>

  </UContainer>
</template>

<script setup lang="ts">
interface Link {
  title: string;
  url: string;
  icon: string;
}

interface Member {
  id: number;
  avatar: string;
  name: string;
  profession: string;
  bio: string;
  links: Link[];
}

const { locale } = useI18n();
const loading = ref<boolean>(true);

const membersValue = ref<Member[]>([]);

const fetchMembers = async () => {
  loading.value = true;
  
  const { members } = await $fetch(`/api/members?lang=${locale.value}`);

  if (!members) {
    return;
  }

  membersValue.value = members;
  loading.value = false;
};

onMounted(() => {
  fetchMembers();
});

watch(locale, () => {
  fetchMembers();
});
</script>
