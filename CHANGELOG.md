# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

# 1.2.0    (2023-10-11)


## **Features**

* support nuxt as a nuxt module `vue-view-transitions/nuxt` ([f298e0e0](https://github.com/Clarkkkk/vue-view-transitions/commit/f298e0e03a93058a763937ef5190855da2c3eb30))

## **Documentation**

* update README ([5a3ffe35](https://github.com/Clarkkkk/vue-view-transitions/commit/5a3ffe35e3e517e5934565a6383d81967e95be97))
* typo ([5fd98da8](https://github.com/Clarkkkk/vue-view-transitions/commit/5fd98da8f2ebfbff363fef554cae297cf9814a27))



# 1.1.1    (2023-07-30)


## **Bug Fixes**

* fix an error when pass a value of wrong type and improve error message's readability ([839340e1](https://github.com/Clarkkkk/vue-view-transitions/commit/839340e102c9275622d6fd8805dd8b8392fb48bc))

## **Test**

* add tests for the plugin ([cd26c711](https://github.com/Clarkkkk/vue-view-transitions/commit/cd26c7114c93a9c6e1db2d418c38d0cd8d1603f7))

## **Chores**

* use aaron-preset to regenerate the whole CHANGELOG.md ([323cf1c3](https://github.com/Clarkkkk/vue-view-transitions/commit/323cf1c3a7cf0318d16abe2b35abac9fe76769d5))
* update README and keywords ([1a6ce423](https://github.com/Clarkkkk/vue-view-transitions/commit/1a6ce42328f25c1563d735b0391861bea44c2239))



# 1.1.0    (2023-07-29)


## **Features**

* provides a shorthand `v-trans` for `v-view-transition-name` ([4bb3f69e](https://github.com/Clarkkkk/vue-view-transitions/commit/4bb3f69e91603e57224ffcdcd3468b6c61383fb6))

## **Bug Fixes**

* should execute the callback of `startViewTransition` as well when running in unsupported browsers ([1b190965](https://github.com/Clarkkkk/vue-view-transitions/commit/1b190965becd4c96c8d9d94dbaf0dcef6c305d39))

## **Chores**

* update README ([e0eefd06](https://github.com/Clarkkkk/vue-view-transitions/commit/e0eefd0651ed18c11f42ad3f082f6fbb3a0a2f9c))
* update README ([a7eb9b1c](https://github.com/Clarkkkk/vue-view-transitions/commit/a7eb9b1cb6ebbe2cb6175a81cc1d01d23e8b5db5))



# 1.0.0    (2023-07-27)


## **Bug Fixes**

* return `ViewTransition` object with default values when browser does not support view transitions api ([a47d5ade](https://github.com/Clarkkkk/vue-view-transitions/commit/a47d5adebf1b20c45253fe24845a8bcc7e53a8db))



# 1.0.0-beta.2    (2023-07-25)


## **Bug Fixes**

* should not access `capturedPromise` before initialization ([abf2cb97](https://github.com/Clarkkkk/vue-view-transitions/commit/abf2cb971dc5ed6b00b7542058ad02a566ba38e3))



# 1.0.0-beta.1    (2023-07-25)


## **Features**

* add `captured` property to `ViewTransition` object ([2648719b](https://github.com/Clarkkkk/vue-view-transitions/commit/2648719b11c12abcff277567f13bc2c8940c7eb8))
    
    ### **Description**
    
    - `captured` property is promise resolved when user agent finishes capturing images of the current state
    
    
    ### **BREAKING CHANGE**
    
    - `startViewTransition` no longer return a promise.
        Previous:
        ```js
        await startViewTransition()
        ```
        Now:
        ```js
        const viewTransition = startViewTransition()
        await viewTransition.captured
        ```
    



# 0.4.0-beta.1    (2023-07-25)


## **Features**

* `startViewTransition` accepts an optional callback ([cf27ddcb](https://github.com/Clarkkkk/vue-view-transitions/commit/cf27ddcb277ec5e584ab7e0a6ea5f86fe7a1f99a))
    
    ### **Description**
    
    - `startViewTransition` accepts an optional callback, which returns a promise. the view transition starts once the promise is resolved.
    - `viewTransition.updateCallbackDone` is provided in the returned `ViewTransition` object, which is the same as the native `ViewTransition` object
    



# 0.3.1    (2023-07-23)


## **Bug Fixes**

* fix an error when using object syntax ([0edbb633](https://github.com/Clarkkkk/vue-view-transitions/commit/0edbb63338a3c957705f7acc201978abf02d8103))



# 0.3.0    (2023-07-02)


## **Features**

* support passing an object for dynamic toggling ([f80358ce](https://github.com/Clarkkkk/vue-view-transitions/commit/f80358cee4d406645e1951c4dda463265d73a8d6))



# 0.2.4    (2023-07-01)


## **Bug Fixes**

* directive callback should be called in udpate hook ([b3e50e95](https://github.com/Clarkkkk/vue-view-transitions/commit/b3e50e95b36cc417a2aea78f6dab8c90a6b2f35f))

## **Chores**

* trigger github action on tag push ([0195dca9](https://github.com/Clarkkkk/vue-view-transitions/commit/0195dca9f4f0f7ace093ff243a281027c353342f))



# 0.2.3    (2023-06-20)


## **Bug Fixes**

* missing export ([29ae7d9a](https://github.com/Clarkkkk/vue-view-transitions/commit/29ae7d9a21b46d4a13d165d6b70bd6bdd377937d))



# 0.2.2    (2023-06-20)


## **Bug Fixes**

* correct information in LICENSE ([b63f8f1e](https://github.com/Clarkkkk/vue-view-transitions/commit/b63f8f1e94e3793e326d0765f61c34519e6f5975))

## **Documentation**

* add examples in README ([b1376ee9](https://github.com/Clarkkkk/vue-view-transitions/commit/b1376ee9129867af31e43bb817c66e827efa3cf4))
* update badges in README ([8394a08e](https://github.com/Clarkkkk/vue-view-transitions/commit/8394a08eb0958f0e8d5a008900d33700150aabe3))



# 0.2.1    (2023-06-20)


## **Bug Fixes**

* fix type errors ([66f749a5](https://github.com/Clarkkkk/vue-view-transitions/commit/66f749a5c292e81eb8c4264c7c63c3d4f3e74f28))



# 0.2.0    (2023-06-20)


## **Features**

* support vue 2.6 and above ([68f40d90](https://github.com/Clarkkkk/vue-view-transitions/commit/68f40d90e1b70520df1e71ac8b2dd22e7257b122))

## **Documentation**

* update README ([7329dc3e](https://github.com/Clarkkkk/vue-view-transitions/commit/7329dc3e6837e0eee6dd8705bc28922e52fb0a8f))

## **Chores**

* setup github actions ([0478b65e](https://github.com/Clarkkkk/vue-view-transitions/commit/0478b65ea9a8d7c30c240e1c9036fa082f2512a3))
* update license in package.json ([4f3c5948](https://github.com/Clarkkkk/vue-view-transitions/commit/4f3c5948b595e125a0a21adc306c799ae93b2766))



# 0.1.2    (2023-06-20)


## **Bug Fixes**

* fix incorrect exports field ([afabf87d](https://github.com/Clarkkkk/vue-view-transitions/commit/afabf87d9ab97586b4b6c0f03f69363411c9f025))



# 0.1.1    (2023-06-20)


## **Bug Fixes**

* add `types` to package.json to fix missing type declarations error ([81fced57](https://github.com/Clarkkkk/vue-view-transitions/commit/81fced5740f544c3a89ca78d60f8a9ffcf1a8fc7))

## **Chores**

* update repository in package.json ([5ab615d0](https://github.com/Clarkkkk/vue-view-transitions/commit/5ab615d0f8bba8e3b77c6ab3095cea7b4caf9896))



# 0.1.0    (2023-06-20)


## **Features**

* ViewTransitionsPlugin and startViewTransition ([df1ec5f9](https://github.com/Clarkkkk/vue-view-transitions/commit/df1ec5f9e515897dd9ddb37d663d7e591fda2348))

## **Documentation**

* update README ([4cce2edb](https://github.com/Clarkkkk/vue-view-transitions/commit/4cce2edbc8c6d7cd9d1b1645a7f57422af319c6b))

## **Chores**

* tsconfig and build config ([9e7dca43](https://github.com/Clarkkkk/vue-view-transitions/commit/9e7dca43437e9b42e6c6f56141fa76ea2ad27c4f))
* clean useless files ([ffc1d329](https://github.com/Clarkkkk/vue-view-transitions/commit/ffc1d329dbf8baea2d5f0192fef0c92d5a65c208))
* vscode settings ([6f2760b0](https://github.com/Clarkkkk/vue-view-transitions/commit/6f2760b0224190eb6faeaf011aea5d1dbc7d8816))
* configure lint and format tools ([fa504f90](https://github.com/Clarkkkk/vue-view-transitions/commit/fa504f908dccf056583881f1da2093a85de7ac11))
* update package.json and install deps ([60e7d6c2](https://github.com/Clarkkkk/vue-view-transitions/commit/60e7d6c22b0c7c3a99b8e080f445d7957ace9fa9))
