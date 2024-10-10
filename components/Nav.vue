<template>
  <nav 
    class="flex items-center justify-between md:justify-around w-full px-8 sticky top-0 min-h-[85px] z-[1000] backdrop-blur-xl"
    :class="{ 'shadow-md': !loading }">

    <template v-if="loading">
      <USkeleton class="h-8 w-24 md:h-8 md:w-36" />
      <USkeleton class="h-8 w-48 md:h-8 md:w-96" />
      <USkeleton class="hidden md:flex h-8 w-52" />
    </template>

    <template v-else>
      <NuxtLink to="/" class="-ml-12 mt-2" aria-label="Navigate to top">
        <NuxtImg :src="logo" width="150" height="85" alt="logo Meet us" />
      </NuxtLink>

      <div class="hidden md:flex items-center min-w-0 gap-8">
        <UHorizontalNavigation :links="items" :ui="ui" />
      </div>

      <div class="flex gap-2 md:gap-4">
        <UPopover mode="hover">
          <UButton icon="i-lucide:languages" size="sm" color="white" variant="soft" :label="$t('idioma')" :trailing="false" />
          <template #panel>
            <SelectLanguage />
          </template>
        </UPopover>

        <UPopover mode="hover">
          <UButton icon="i-lucide:palette" size="sm" color="white" variant="soft" :label="$t('tema')" :trailing="false" />
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

const logo = computed(() => {
  return (colorMode.value === 'light' || colorMode.value === 'sepia') ? '/logo_light_meet-us.png' : '/logo_dark_meet-us.png';
})

const items = computed(() => { 
  return [ 
    [
      {label: t("inicio"), to: '#start'}, 
      {label: t("sobre"), to: '#about-us'}, 
      {label: t("projetos"), to: '#projects'}, 
      {label: t("feedbacks"), to: '#feedbacks'},
      {label: t("habilidades"), to: '#skills'}, 
      {label: t("contato"), to: '#contact-us'},
    ]
  ]
})  

const ui = {
  before: 'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-100 dark:hover:before:bg-gray-900/50',
  active: 'text-gray-900 dark:text-white after:bg-transparent dark:after:bg-transparent after:rounded-full',
}

const loading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

