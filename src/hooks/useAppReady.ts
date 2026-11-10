import { useEffect, useState } from 'react'

const MIN_DISPLAY_MS = 1200

const pageLoaded = () =>
    new Promise<void>((resolve) => {
        if (document.readyState === 'complete') {
            resolve()
            return
        }
        window.addEventListener('load', () => resolve(), { once: true })
    })

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export default function useAppReady() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        let active = true

        void Promise.all([document.fonts.ready, pageLoaded(), wait(MIN_DISPLAY_MS)]).then(() => {
            if (active) setReady(true)
        })

        return () => {
            active = false
        }
    }, [])

    return ready
}