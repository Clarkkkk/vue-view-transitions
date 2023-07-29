interface ViewTransition {
    captured: Promise<void>
    updateCallbackDone: Promise<void>
    ready: Promise<void>
    finished: Promise<void>
    skipTransition: () => void
}

export function startViewTransition(callback?: () => Promise<void>): ViewTransition {
    const viewTransition = {} as ViewTransition
    // @ts-expect-error startViewTransition is not existed on document yet
    if (document.startViewTransition) {
        const capturedPromise = new Promise<void>((resolve) => {
            // @ts-expect-error startViewTransition is not existed on document yet
            const nativeViewTransition = document.startViewTransition(async () => {
                resolve()
                if (callback) {
                    await callback()
                }
            })
            viewTransition.updateCallbackDone = nativeViewTransition.updateCallbackDone
            viewTransition.ready = nativeViewTransition.ready
            viewTransition.finished = nativeViewTransition.finished
            viewTransition.skipTransition =
                nativeViewTransition.skipTransition.bind(nativeViewTransition)
        })
        viewTransition.captured = capturedPromise
    } else {
        viewTransition.captured = Promise.resolve()
        const callbackPromise = callback ? Promise.resolve(callback()) : Promise.resolve()
        viewTransition.updateCallbackDone =
            viewTransition.ready =
            viewTransition.finished =
                callbackPromise
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        viewTransition.skipTransition = () => {}
        console.error(
            "This browser doesn't support View Transitions Api, please check: https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility"
        )
    }
    return viewTransition
}
