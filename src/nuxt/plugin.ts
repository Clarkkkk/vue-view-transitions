// @ts-expect-error not installed
import { defineNuxtPlugin } from 'nuxt/app'
import { ViewTransitionsPlugin } from '../plugin'

// @ts-expect-error not installed
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ViewTransitionsPlugin())
})
