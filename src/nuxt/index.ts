import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'

export default defineNuxtModule({
    meta: {
        name: 'vue-view-transitions/nuxt'
    },
    defaults: {},
    setup(_, nuxt) {
        // https://github.com/nuxt/nuxt/issues/14084
        nuxt.options.build = nuxt.options.build || {}
        nuxt.options.build.transpile = nuxt.options.build.transpile || []
        nuxt.options.build.transpile.push('vue-view-transitions')

        const resolver = createResolver(import.meta.url)
        addPlugin(resolver.resolve('./plugin'))
    }
}) as NuxtModule
