import type { Plugin } from 'vue'
import type { PluginObject as LegacyPlugin, VueConstructor as LegacyVue } from 'vue2'
import type { DirectiveBinding } from 'vue2/types/options'

function getViewTransitionName(value: string | Record<string, boolean>) {
    if (typeof value === 'string') {
        return value
    } else {
        const [viewTransitionName, active] = Object.entries(value)?.[0] || {}
        if (active) {
            return viewTransitionName
        } else {
            return undefined
        }
    }
}

export function ViewTransitionsPlugin(): Plugin {
    return {
        install(app) {
            app.directive('view-transition-name', {
                beforeMount(el, binding) {
                    el.style.viewTransitionName = getViewTransitionName(binding.value)
                },
                beforeUpdate(el, binding) {
                    el.style.viewTransitionName = getViewTransitionName(binding.value)
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
                    // eslint-disable-next-line @typescript-eslint/no-extra-semi
                    ;(el.style as any).viewTransitionName = getViewTransitionName(binding.value)
                }
            )
        }
    }
}
