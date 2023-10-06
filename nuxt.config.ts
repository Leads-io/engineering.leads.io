// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxt/content'
    ],
    content: {
      highlight: {
        // Theme used in all color schemes.
        theme: 'github-light'
      }
    }
})
