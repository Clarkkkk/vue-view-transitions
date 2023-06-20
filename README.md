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

You should use a unique view-transition-name for each element (or element pair).

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

### Use `startViewTransition` to start a new view transition


```js
async function animate() {
    await startViewTransition()
    style.value.transform = style.value.transform === '' ? 'translateX(50px)' : ''
}
```

Note that you should wait `startViewTransition()` to be fulfilled before making dom updates. Otherwise the browser may capture the wrong snapshot of the document.

### Use `startViewTransition` in vue-router to apply page transitions

```js
router.beforeResolve(async () => {
    await startViewTransition()
    // ...
})
```

### `ViewTransition` object

`startViewTransition()` is supposed to fulfilled with a `ViewTransition` object, and provides functionality to react to the transition reaching different states or skip the transition altogether.

- `ViewTransition.finished`: A Promise that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.

- `ViewTransition.ready`: A Promise that fulfills once the pseudo-element tree is created and the transition animation is about to start.

- `ViewTransition.skipTransition`: Skips the animation part of the view transition.

## Compatibility

### Vue 2
`vue-view-transitions` supports vue 2.6 or above. You should use `ViewTransitionsLegacyPlugin` instead of `ViewTransitionsPlugin` in Vue 2 project.

```js
import { ViewTransitionsLegacyPlugin } from 'vue-view-transitions'

Vue.use(ViewTransitionsLegacyPlugin())
```

### Browser Compatibility
`vue-view-transitions` uses View Transitions API under the hood. Currently, View Transitions API is only availble in Chrome 111+. If you need a more compatible solution, use [vue-starport](https://github.com/antfu/vue-starport), or [nuxt transitions](https://nuxt.com/docs/getting-started/transitions) if you are using Nuxt. ([Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility))


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
