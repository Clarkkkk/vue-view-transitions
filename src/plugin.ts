import type { Plugin } from 'vue'
import type { PluginObject as LegacyPlugin, VueConstructor as LegacyVue } from 'vue2'
import type { DirectiveBinding } from 'vue2/types/options'

function setViewTransitionName(
    el: any,
    value: string | Record<string, boolean>,
    directiveName: 'view-transition-name' | 'trans'
) {
    if (typeof value === 'string') {
        el.style.viewTransitionName = value
    } else if (value && typeof value === 'object') {
        const [viewTransitionName, active] = Object.entries(value)?.[0] || []
        if (active) {
            el.style.viewTransitionName = viewTransitionName
        } else {
            el.style.viewTransitionName = 'none'
        }
    } else {
        throw new Error(
            `[vue-view-transitions]: The value of \`v-${directiveName}\` should be either "string" or "object" but got "${typeof value}"`
        )
    }
}

export function ViewTransitionsPlugin(): Plugin {
    return {
        install(app) {
            app.directive('view-transition-name', {
                beforeMount(el, binding) {
                    setViewTransitionName(el, binding.value, 'view-transition-name')
                },
                beforeUpdate(el, binding) {
                    setViewTransitionName(el, binding.value, 'view-transition-name')
                }
            })

            app.directive('trans', {
                beforeMount(el, binding) {
                    setViewTransitionName(el, binding.value, 'trans')
                },
                beforeUpdate(el, binding) {
                    setViewTransitionName(el, binding.value, 'trans')
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
                    setViewTransitionName(el, binding.value, 'view-transition-name')
                }
            )

            Vue.directive('trans', function (el: HTMLElement, binding: DirectiveBinding) {
                setViewTransitionName(el, binding.value, 'trans')
            })
        }
    }
}
