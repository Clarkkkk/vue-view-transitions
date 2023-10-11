# vue-view-transitions

[![NPM version][npm-image]][npm-url] [![NPM Downloads][npm-download]][npm-url] [![License][license]][license-url] [![Minified Size][minified-size]][npm-url] [![Build Status][build-status]][github-actions]

A simple tool to use View Transition API in Vue

## Introduction
The View Transitions API is an experimental API recently released in Chrome 111+. It provides a convenient way to create animated transitions between different DOM states. `vue-view-transitions` makes it easier to use View Transitions API in Vue. For more information about View Transition API, Please check [Reference](#reference).

## Install

```sh
npm i vue-view-transitions
```

Or

```sh
pnpm add vue-view-transitions
```

```sh
yarn add vue-view-transitions
```

## Usage

### Use `ViewTransitionsPlugin` to add view transition name easily

`ViewTransitionsPlugin` provides a directive `v-view-transition-name` (or `v-trans` for short) to apply `view-transition-name` to elments. You should use a unique view-transition-name for each element (or element pair).

In `main.ts`

```js
import { createApp } from 'vue'
import { ViewTransitionsPlugin } from 'vue-view-transitions'
import App from './App.vue'

createApp(App).use(ViewTransitionsPlugin())
```

In App.vue

```html
<h1 v-view-transition-name="'title'">Title</h1>
```

It will be rendered to this when mounted:

```html
<h1 style="view-transition-name: title">Title</h1>
```

You can use object syntax to toggle it dynamically:

```html
<h1 v-trans="{ title: someBoolean }">Title</h1>
```

### Use `startViewTransition` to start a new view transition


```js
async function animate() {
    const viewTransition = startViewTransition()
    await viewTransition.captured
    style.value.transform = style.value.transform === '' ? 'translateX(50px)' : ''
}
```

Note that you should wait `viewTransition.captured` to be fulfilled before making dom updates. Otherwise the dom change may finish before the browser can capture the snapshot of current state and results in no transitions at all.

### Use `startViewTransition` in vue-router to apply page transitions

The code execution order here is a bit puzzling due to the asynchronous nature of both view transitions and routing. The order should be "beforeResolve start" -> "capture screenshot of current state" -> "beforeResolve end" -> "dom change callback" -> "view transition". As you can see, there are two promises: `beforeResolve` waits for the `viewTransition.captured` promise to fulfill, `startViewTransition` waits for the dom change callback to fulfill.

```js
router.beforeResolve(async () => {
    const viewTransition = startViewTransition(async () => {
        // dom changes
    })
    await viewTransition.captured
    // ...
})
```

### `ViewTransition` object

`startViewTransition(callback?)`: return a `ViewTransition` object. The optional callback is supposed to return a promise. When the promise returned by the callback fulfills, the view transition starts. A few properties are used to describe the whole process. They fulfills in a sequential order: `captured` -> `updateCallbackDone` -> `ready` -> `finished`.

- `ViewTransition.captured`: A promise that fulfills once user agent finishes capturing a screenshot of the current state

- `ViewTransition.updateCallbackDone`: A promise that fulfills once the promise returned by the callback of `startViewTransition` fulfills

- `ViewTransition.ready`: A Promise that fulfills once the pseudo-element tree is created and the transition animation is about to start.

- `ViewTransition.finished`: A Promise that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.

- `ViewTransition.skipTransition()`: A method used to skips the animation part of the view transition.

### Use in Nuxt

Nuxt ships with an experimental support for the native View Transitions API [since 3.4.0](https://github.com/nuxt/nuxt/discussions/20208). `vue-view-transitions` provides a nuxt module for nuxt users. Here is how to enable it:

```js
export default defineNuxtConfig({
    modules: [
        'vue-view-transitions/nuxt'
    ],
    experimental: {
        viewTransition: true
    }
})
```

Done. Now it's able to use page transitions with the `v-trans` directive during page routing without any extra work thanks to the nuxt intergration. As for the manual triggered transitions, it works the same as described above.

## Examples

More examples are available [here](https://stackblitz.com/edit/vue-view-transitions-examples?file=src%2Fmain.ts).

## Compatibility

### Vue 2
`vue-view-transitions` supports vue 2.6 or above. You should use `ViewTransitionsLegacyPlugin` instead of `ViewTransitionsPlugin` in Vue 2 project.

```js
import { ViewTransitionsLegacyPlugin } from 'vue-view-transitions'

Vue.use(ViewTransitionsLegacyPlugin())
```

### Browser Compatibility
`vue-view-transitions` uses View Transitions API under the hood. Currently, View Transitions API is only available in Chrome 111+. If running in unsupported browsers, it simply executes the callback of `startViewTransition` (if provided). If you need a more compatible solution, use [vue-starport](https://github.com/antfu/vue-starport), or [nuxt transitions](https://nuxt.com/docs/getting-started/transitions) if you are using Nuxt. ([Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility))

## Migrate from 0.x

`startViewTransition` no longer return a promise.

Previous:

```js
await startViewTransition()
```

Now:

```js
const viewTransition = startViewTransition()
await viewTransition.captured
```

## Changelog

See [CHANGELOG](https://github.com/Clarkkkk/vue-view-transitions/blob/main/CHANGELOG.md)

## Reference

[Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)

[MDN ViewTransition](https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition)

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.

[npm-url]: https://www.npmjs.com/package/vue-view-transitions
[npm-image]: https://badge.fury.io/js/vue-view-transitions.svg
[npm-download]: https://img.shields.io/npm/dw/vue-view-transitions
[license]: https://img.shields.io/github/license/Clarkkkk/vue-view-transitions
[license-url]: https://github.com/Clarkkkk/vue-view-transitions/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/vue-view-transitions
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/vue-view-transitions/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/vue-view-transitions/actions
