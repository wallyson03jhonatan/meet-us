<template>
    <section id="feedbacks" class="scroll-mt-28 bg-gray-100 dark:bg-gray-900">
        <UContainer>

            <div class="text-center">
                <h2 class="font-semibold text-4xl">{{ $t("feedbackTitulo") }}</h2>
                <p class="mt-1 font-normal">{{ $t("feedbackDescricao") }}</p>
            </div>

            <div class="py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

                <template v-if="loading">
                    <USkeleton class="min-h-[300px] min-w-full" :ui="uiSkeleton" />
                    <USkeleton class="min-h-[300px] min-w-full" :ui="uiSkeleton" />
                </template>

                <template v-else>
                    <SectionFeedbacksCustomersCard ref="card1" />
                    <SectionFeedbacksCustomersCard ref="card2" />
                </template>

            </div>

        </UContainer>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const loading = ref<boolean>(true);

const uiSkeleton = {
    background: 'bg-gray-200 dark:bg-gray-800'
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>