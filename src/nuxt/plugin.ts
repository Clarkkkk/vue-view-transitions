import { defineNuxtPlugin } from 'nuxt/app'
import { ViewTransitionsPlugin } from '../plugin'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ViewTransitionsPlugin())
})
