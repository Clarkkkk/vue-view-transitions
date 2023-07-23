import type { Plugin } from 'vue'
import type { PluginObject as LegacyPlugin, VueConstructor as LegacyVue } from 'vue2'
import type { DirectiveBinding } from 'vue2/types/options'

function setViewTransitionName(el: any, value: string | Record<string, boolean>) {
    if (typeof value === 'string') {
        el.style.viewTransitionName = value
    } else {
        const [viewTransitionName, active] = Object.entries(value)?.[0] || {}
        if (active) {
            el.style.viewTransitionName = viewTransitionName
        } else {
            el.style.viewTransitionName = 'none'
        }
    }
}

export function ViewTransitionsPlugin(): Plugin {
    return {
        install(app) {
            app.directive('view-transition-name', {
                beforeMount(el, binding) {
                    setViewTransitionName(el, binding.value)
                },
                beforeUpdate(el, binding) {
                    setViewTransitionName(el, binding.value)
                }
            })
        }
    }
}

export function ViewTransitionsLegacyPlugin(): LegacyPlugin<void> {
    return {
        install(Vue: LegacyVue) {
            Vue.directive(
                'view-transition-name',
                function (el: HTMLElement, binding: DirectiveBinding) {
                    setViewTransitionName(el, binding.value)
                }
            )
        }
    }
}
