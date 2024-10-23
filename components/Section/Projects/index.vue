<template>
    <section id="projects" class="py-16 scroll-mt-24 bg-gray-100 dark:bg-gray-900">
        <UContainer>
    
            <div class="text-center">
                <h2 class="font-semibold text-4xl">{{ $t("projetosTitulo") }}</h2>
                <p class="mt-1 font-normal">{{ $t("projetosDescricao") }}</p>
            </div>
        
            <div class="my-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
        
                <template v-if="loading">
                    <USkeleton class="min-h-[300px] min-w-full" v-for="index in 4" :key="index" :ui="uiSkeleton" />
                </template>
        
                <template v-else>
                    <SectionProjectsProjectCard  v-for="project, index in projectsValue" :key="index" :project="project" />
                </template>
        
            </div>
        </UContainer>
    </section>
</template>
  
<script setup lang="ts">

interface Projects {
  id: number;
  title: string;
  description: string;
  deploy: string;
  github: string;
  stack: string[];
}

const uiSkeleton = {
    background: 'bg-gray-200 dark:bg-gray-800'
}

const { locale } = useI18n();
const loading = ref<boolean>(true);

const projectsValue = ref<Projects[]>([]);

const fetchProjects = async () => {
  loading.value = true;
  
  const { projects } = await $fetch(`/api/projects?lang=${locale.value}`);

  if (!projects) {
    return;
  }

  projectsValue.value = projects;
  loading.value = false;
};

onMounted(() => {
  fetchProjects();
});

watch(locale, () => {
  fetchProjects();
});
</script>