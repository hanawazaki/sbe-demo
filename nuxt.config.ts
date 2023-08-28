// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:'SBE Group',
      meta:[
        {name:"description",content:"everything about nuxt 3"}
      ],
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'}
      ]
    },
  },
})
