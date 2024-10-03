<template>
  <div class="p-4">

    <span class="text-lg text-center font-medium">{{ $colorMode.value }}</span>

    <div class="mt-2 flex justify-center items-center gap-2">
      <UBadge class="cursor-pointer" size="sm" color="gray" variant="soft"
        :class="$colorMode.preference === 'light' ? 'border-2 border-black dark:border-white' : ''"
        @click="changeTheme('light')">Light</UBadge>
      <UBadge class="cursor-pointer" size="sm" color="gray" variant="soft"
        :class="$colorMode.preference === 'dark' ? 'border-2 border-black dark:border-white' : ''"
        @click="changeTheme('dark')">Dark</UBadge>
      <UBadge class="cursor-pointer" size="sm" color="gray" variant="soft"
        :class="$colorMode.preference === 'sepia' ? 'border-2 border-black dark:border-white' : ''"
        @click="changeTheme('sepia')">Sepia</UBadge>
    </div>

  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const changeTheme = (theme: string) => {
  colorMode.preference = theme;
};
</script>
