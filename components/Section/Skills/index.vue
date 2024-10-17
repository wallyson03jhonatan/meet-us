<template>
    <UContainer as="section" id="skills" class="py-16 scroll-mt-24">
  
      <div class="text-center">
        <h2 class="font-semibold text-4xl">{{ $t("habilidadesTitulo") }}</h2>
        <p class="mt-1 font-normal">{{ $t("habilidadesDescricao") }}</p>
      </div>
  
      <ul class="my-16 grid grid-cols-3 md:grid-cols-8 gap-4"> 
  
        <template v-if="loading">
          <li v-for="index in 16" :key="index">
            <USkeleton class="min-h-[100px] min-w-full rounded-xl shadow-lg" />
          </li>
        </template>
  
        <template v-else>
          <SectionSkillsCard 
            v-for="info, key in skillsInfo" 
            :key="key" 
            :info="info"
          />
        </template>
  
      </ul>
  
    </UContainer>
  </template>
  
<script setup lang="ts">
interface Skills {
    title: string;
    icon: string;
}

const { locale } = useI18n();
const skillsInfo = ref<Array<Skills>>([])
const loading = ref<boolean>(true);

const fetchSkills = async () => {
  loading.value = true;
  
  const { skills } = await $fetch('/api/skills');

  if (!skills) {
    return;
  }

  skillsInfo.value = skills;
  loading.value = false;
};

onMounted(() => {
    fetchSkills();
});
</script>
