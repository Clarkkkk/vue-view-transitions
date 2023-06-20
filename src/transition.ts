interface ViewTransition {
    ready: Promise<void>
    finished: Promise<void>
    skipTransition: () => void
}

export async function startViewTransition(): Promise<ViewTransition> {
    const viewTransition = {} as ViewTransition
    // @ts-expect-error startViewTransition is not existed on document yet
    if (document.startViewTransition) {
        await new Promise<void>((resolve) => {
            // @ts-expect-error startViewTransition is not existed on document yet
            const nativeViewTransition = document.startViewTransition(() => {
                resolve()
            })
            viewTransition.ready = nativeViewTransition.ready
            viewTransition.finished = nativeViewTransition.finished
            viewTransition.skipTransition =
                nativeViewTransition.skipTransition.bind(nativeViewTransition)
        })
    } else {
        console.error(
            "This browser doesn't support View Transitions Api, please check: https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility"
        )
    }
    return viewTransition
}
