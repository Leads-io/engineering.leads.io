// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxt/content'
    ],
    content: {
      highlight: {
        preload: ['sql'],
        theme: 'github-light'
      }
    },
    ssr: true,
    nitro: {
      prerender: {
        crawlLinks: true,
        failOnError: false, 
      },
    },
})
