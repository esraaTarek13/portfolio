import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

const readTheme = (): Theme =>
    localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(readTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggle = useCallback(
        () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
        [],
    )

    return { theme, toggle }
}