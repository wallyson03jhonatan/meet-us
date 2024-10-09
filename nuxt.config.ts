import { darkMode } from "#tailwind-config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['@/assets/css/global.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode', 
    '@nuxt/ui', 
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n",
      },
    ], 
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classPrefix: '',
    classSuffix: '',
  },
})