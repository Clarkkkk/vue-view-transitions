import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ViewTransitionsPlugin } from '../src/plugin'
import ErrorComponent from './ErrorComponent.vue'
import TestComponent from './TestComponent.vue'

describe('plugin', () => {
    test('directives', () => {
        const wrapper = mount(TestComponent, {
            global: {
                plugins: [ViewTransitionsPlugin()]
            }
        })
        expect(wrapper.get('#full-directive').attributes().style).toBe(
            'view-transition-name: square;'
        )
        expect(wrapper.get('#short-directive').attributes().style).toBe(
            'view-transition-name: circle;'
        )
        expect(wrapper.get('#object-directive').attributes().style).toBe(
            'view-transition-name: triangle;'
        )
        expect(wrapper.get('#object-directive-false').attributes().style).toBe(
            'view-transition-name: none;'
        )
    })

    test('pass invalid types', () => {
        function mountComponent() {
            mount(ErrorComponent, {
                global: {
                    plugins: [ViewTransitionsPlugin()]
                }
            })
        }

        expect(mountComponent).toThrowError(
            '[vue-view-transitions]: The value of `v-trans` should be either "string" or "object" but got "boolean"'
        )
    })
})
