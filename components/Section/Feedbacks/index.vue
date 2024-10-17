<template>
    <section id="feedbacks" class="scroll-mt-24 py-16 bg-gray-100 dark:bg-gray-900">
        <UContainer>

            <div class="text-center">
                <h2 class="font-semibold text-4xl">{{ $t("feedbackTitulo") }}</h2>
                <p class="mt-1 font-normal">{{ $t("feedbackDescricao") }}</p>
            </div>

            <div class="pt-16 grid grid-cols-1 md:grid-cols-2 gap-16">

                <template v-if="loading">
                    <USkeleton class="min-h-[300px] min-w-full" :ui="uiSkeleton" />
                    <USkeleton class="min-h-[300px] min-w-full" :ui="uiSkeleton" />
                </template>

                <template v-else>
                    <SectionFeedbacksCustomersCard 
                        v-for="values, key in feedbacksValue" 
                        :key="key" 
                        :feedback-info="values" 
                        :ref="values.id.toString()" 
                    />
                </template>

            </div>

        </UContainer>
    </section>
</template>

<script setup lang="ts">
interface Feedbacks {
  id: number;
  avatar: string;
  name: string;
  profession: string;
  feedback: string;
  rating: number;
}

const { locale } = useI18n();
const loading = ref<boolean>(true);
const feedbacksValue = ref<Feedbacks[]>([]);

const uiSkeleton = {
    background: 'bg-gray-200 dark:bg-gray-800'
}

const fetchFeedbacks = async () => {
  loading.value = true;
  
  const { feedbacks } = await $fetch(`/api/feedbacks?lang=${locale.value}`);

  if (!feedbacks) {
    return;
  }

  feedbacksValue.value = feedbacks;
  loading.value = false;
};

onMounted(() => {
  fetchFeedbacks();
});

watch(locale, () => {
  fetchFeedbacks();
});
</script>