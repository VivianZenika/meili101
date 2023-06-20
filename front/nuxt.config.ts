// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-meilisearch"],

  $meta: {
    title: "meili101 - Vivian SARAZIN",
    link: [{ rel: "icon", type: "image/x-icon", href: "/pokeball.ico" }],
  },

  css: ["~/assets/styles/transitions.css", "~/assets/styles/global.css"],

  meilisearch: {
    hostUrl: process.env.MEILISEARCH_BASE_URL,
    searchApiKey: process.env.MEILISEARCH_MASTER_KEY,
    adminApiKey: process.env.MEILISEARCH_MASTER_KEY,
    serverSideUsage: true,
    instantSearch: {
      theme: "algolia",
    },
  },
  runtimeConfig: {
    public: {
      POKEAPI_BASE_URL: process.env.POKEAPI_BASE_URL,
    },
  },
});
