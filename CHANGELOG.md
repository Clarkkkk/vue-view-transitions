# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

# [1.1.0](https://github.com/Clarkkkk/vue-view-transitions/compare/v1.0.0...v1.1.0) (2023-07-29)


### Bug Fixes

* should execute the callback of `startViewTransition` as well when running in unsupported browsers ([1b19096](https://github.com/Clarkkkk/vue-view-transitions/commit/1b190965becd4c96c8d9d94dbaf0dcef6c305d39))


### Features

* provides a shorthand `v-trans` for `v-view-transition-name` ([4bb3f69](https://github.com/Clarkkkk/vue-view-transitions/commit/4bb3f69e91603e57224ffcdcd3468b6c61383fb6))



# [1.0.0](https://github.com/Clarkkkk/vue-view-transitions/compare/v1.0.0-beta.2...v1.0.0) (2023-07-27)


### Bug Fixes

* return `ViewTransition` object with default values when browser does not support view transitions api ([a47d5ad](https://github.com/Clarkkkk/vue-view-transitions/commit/a47d5adebf1b20c45253fe24845a8bcc7e53a8db))



# [1.0.0-beta.2](https://github.com/Clarkkkk/vue-view-transitions/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2023-07-25)


### Bug Fixes

* should not access `capturedPromise` before initialization ([abf2cb9](https://github.com/Clarkkkk/vue-view-transitions/commit/abf2cb971dc5ed6b00b7542058ad02a566ba38e3))



# [1.0.0-beta.1](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.4.0-beta.1...v1.0.0-beta.1) (2023-07-25)


### Features

* add `captured` property to `ViewTransition` object ([2648719](https://github.com/Clarkkkk/vue-view-transitions/commit/2648719b11c12abcff277567f13bc2c8940c7eb8))


### BREAKING CHANGES

* - `startViewTransition` no longer return a promise.
    
    Previous:
    ```js
    await startViewTransition()
    ```
    Now:
    ```js
    const viewTransition = startViewTransition()
    await viewTransition.captured
    ```



# [0.4.0-beta.1](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.3.1...v0.4.0-beta.1) (2023-07-25)


### Features

* `startViewTransition` accepts an optional callback ([cf27ddc](https://github.com/Clarkkkk/vue-view-transitions/commit/cf27ddcb277ec5e584ab7e0a6ea5f86fe7a1f99a))



## [0.3.1](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.3.0...v0.3.1) (2023-07-23)


### Bug Fixes

* fix an error when using object syntax ([0edbb63](https://github.com/Clarkkkk/vue-view-transitions/commit/0edbb63338a3c957705f7acc201978abf02d8103))



# [0.3.0](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.2.4...v0.3.0) (2023-07-02)


### Features

* support passing an object for dynamic toggling ([f80358c](https://github.com/Clarkkkk/vue-view-transitions/commit/f80358cee4d406645e1951c4dda463265d73a8d6))



## [0.2.4](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.2.3...v0.2.4) (2023-07-01)


### Bug Fixes

* directive callback should be called in udpate hook ([b3e50e9](https://github.com/Clarkkkk/vue-view-transitions/commit/b3e50e95b36cc417a2aea78f6dab8c90a6b2f35f))



## [0.2.3](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.2.2...v0.2.3) (2023-06-20)


### Bug Fixes

* missing export ([29ae7d9](https://github.com/Clarkkkk/vue-view-transitions/commit/29ae7d9a21b46d4a13d165d6b70bd6bdd377937d))



## [0.2.2](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.2.1...v0.2.2) (2023-06-20)


### Bug Fixes

* correct information in LICENSE ([b63f8f1](https://github.com/Clarkkkk/vue-view-transitions/commit/b63f8f1e94e3793e326d0765f61c34519e6f5975))



## [0.2.1](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.2.0...v0.2.1) (2023-06-20)


### Bug Fixes

* fix type errors ([66f749a](https://github.com/Clarkkkk/vue-view-transitions/commit/66f749a5c292e81eb8c4264c7c63c3d4f3e74f28))



# [0.2.0](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.1.2...v0.2.0) (2023-06-20)


### Features

* support vue 2.6 and above ([68f40d9](https://github.com/Clarkkkk/vue-view-transitions/commit/68f40d90e1b70520df1e71ac8b2dd22e7257b122))



## [0.1.2](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.1.1...v0.1.2) (2023-06-20)


### Bug Fixes

* fix incorrect exports field ([afabf87](https://github.com/Clarkkkk/vue-view-transitions/commit/afabf87d9ab97586b4b6c0f03f69363411c9f025))



## [0.1.1](https://github.com/Clarkkkk/vue-view-transitions/compare/v0.1.0...v0.1.1) (2023-06-20)


### Bug Fixes

* add `types` to package.json to fix missing type declarations error ([81fced5](https://github.com/Clarkkkk/vue-view-transitions/commit/81fced5740f544c3a89ca78d60f8a9ffcf1a8fc7))



# 0.1.0 (2023-06-20)


### Features

* ViewTransitionsPlugin and startViewTransition ([df1ec5f](https://github.com/Clarkkkk/vue-view-transitions/commit/df1ec5f9e515897dd9ddb37d663d7e591fda2348))
