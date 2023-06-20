import type { Plugin } from 'vue'
import type { PluginObject as LegacyPlugin, VueConstructor as LegacyVue } from 'vue2'

export function ViewTransitionsPlugin(): Plugin {
    return {
        install(app) {
            app.directive('view-transition-name', {
                beforeMount(el, binding) {
                    el.style.viewTransitionName = binding.value
                }
            })
        }
    }
}

export function ViewTransitionsLegacyPlugin(): LegacyPlugin<void> {
    return {
        install(Vue: LegacyVue) {
            Vue.directive('view-transition-name', {
                bind(el, binding) {
                    // eslint-disable-next-line @typescript-eslint/no-extra-semi
                    ;(el.style as any).viewTransitionName = binding.value
                }
            })
        }
    }
}
