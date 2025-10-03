// Intentionally configured to demonstrate poor CLS patterns. Do NOT copy to production.
// Run with: npm i && npx nuxi dev
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  app: {
    head: {
      // Loading Google Fonts via CSS @import (in CSS below) can cause FOIT/FOUT and layout shifts.
      // We also add late-loading scripts without preloading to worsen CLS.
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', defer: true }
      ]
    }
  },
  nitro: {
    compatibilityDate: '2025-10-04'
  }
})
