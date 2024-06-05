// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/test-utils/module",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    outputDir: "assets",
    families: {
      Jost: [300, 400, 500, 600, 700, 800],
    },
  },
  app: {
    head: {
      title: "MeowFacts",
      meta: [
        {
          name: "description",
          content: "Aplicação Nuxt3 para teste de código da DefSafe",
        },
      ],
      link: [],
    },
  },
  runtimeConfig: {
    apiMeowFacts: "https://meowfacts.herokuapp.com",
  },
});
