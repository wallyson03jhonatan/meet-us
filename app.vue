<template>
  <div>
    <h1 class="text-lg">Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>

    <h1 class="text-lg">{{ $t("tituloFavoritos") }}</h1>
    <select v-model="locale" class="ml-8">
      <option value="">select</option>
      <option value="pt">pt</option>
      <option value="en">en</option>
    </select>

  </div>
</template>

<script setup>
const { locale } = useI18n();
const colorMode = useColorMode();
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
