<template>
  <div class="p-4">
    
    <span class="text-lg text-center font-medium">{{ $t("boasVindas") }}</span>

    <div class="mt-2 flex justify-center items-center gap-2">
      <UIcon class="cursor-pointer" :class="locale === 'pt' ? 'border-2 border-black dark:border-white' : ''"
        name="i-flagpack:br" size="18" title="pt-BR" @click="changeLanguage('pt')" />
      <UIcon class="cursor-pointer" :class="locale === 'en' ? 'border-2 border-black dark:border-white' : ''"
        name="i-flagpack:us" size="18" title="EN" @click="changeLanguage('en')" />
      <UIcon class="cursor-pointer" :class="locale === 'es' ? 'border-2 border-black dark:border-white' : ''"
        name="i-flagpack:es" size="18" title="ES" @click="changeLanguage('es')" />
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const changeLanguage = (language: string) => {
  locale.value = language;
};
</script>
