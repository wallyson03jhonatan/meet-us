<template>
  <nav 
    class="flex items-center justify-between md:justify-around w-full px-8 sticky top-0 min-h-[85px] z-[1000] backdrop-blur-xl"
    :class="{ 'shadow-md': !loading }">

    <template v-if="loading">
      <USkeleton class="h-8 w-24 md:h-12 md:w-36" />
      <USkeleton class="h-8 w-48 md:h-12 md:w-96" />
      <USkeleton class="hidden md:flex h-12 w-72" />
    </template>

    <template v-else>
      <NuxtLink to="/" class="-ml-12 mt-2">
        <NuxtImg :src="logo" width="150" />
      </NuxtLink>

      <div class="hidden md:flex items-center min-w-0 gap-8">
        <ULink to="#about-us"
          active-class="text-sm md:text-base py-1 px-2 font-semibold text-dark hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-900 dark:hover:text-gray-200">
          {{ $t("sobre") }}
        </ULink>

        <ULink to="#projects"
          active-class="text-sm md:text-base py-1 px-2 font-semibold text-dark hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-900 dark:hover:text-gray-200">
          {{ $t("projetos") }}
        </ULink>

        <ULink to="#contact-us"
          active-class="text-sm md:text-base py-1 px-2 font-semibold text-dark hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-900 dark:hover:text-gray-200">
          {{ $t("contato") }}
        </ULink>
      </div>

      <div class="flex gap-2 md:gap-4">
        <UPopover mode="hover">
          <UButton icon="i-lucide:languages" size="md" color="white" variant="soft" :label="$t('idioma')" :trailing="false" />
          <template #panel>
            <SelectLanguage />
          </template>
        </UPopover>

        <UPopover mode="hover">
          <UButton icon="i-lucide:palette" size="md" color="white" variant="soft" :label="$t('tema')" :trailing="false" />
          <template #panel>
            <SelectTheme />
          </template>
        </UPopover>

        <UDropdown class="md:hidden" :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" icon="i-lucide:menu"  />
        </UDropdown>
      </div>
    </template>

  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const colorMode = useColorMode();
const loading = ref<boolean>(true);

const logo = computed(() => {
  return (colorMode.value === 'light' || colorMode.value === 'sepia') ? '/logo_light_meet-us.png' : '/logo_dark_meet-us.png';
})

const items = [
  [
    {label: t("sobre"), to: '#about-us' }, 
    {label: t("projetos"), to: '#projects'}, 
    {label: t("contato"), to: '#contact-us'},
  ]
]

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

