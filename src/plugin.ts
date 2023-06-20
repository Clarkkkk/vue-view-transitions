import type { Plugin } from 'vue'

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
