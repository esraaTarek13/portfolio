import { useCallback, useRef, useState, type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { TransitionPhase } from '@/components/atoms/TransitionCircle'

interface Origin {
    x: number
    y: number
}

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function usePageTransition() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [phase, setPhase] = useState<TransitionPhase>('idle')
    const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 })
    const target = useRef('/')

    const goTo = useCallback(
        (event: MouseEvent<HTMLElement>, to: string) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
            event.preventDefault()
            if (phase !== 'idle' || to === pathname) return
            if (prefersReducedMotion()) {
                navigate(to)
                return
            }
            const rect = event.currentTarget.getBoundingClientRect()
            setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
            target.current = to
            setPhase('covering')
        },
        [navigate, pathname, phase],
    )

    const handleTransitionEnd = useCallback(() => {
        if (phase === 'covering') {
            navigate(target.current)
            setPhase('revealing')
        } else if (phase === 'revealing') {
            setPhase('idle')
        }
    }, [navigate, phase])

    return {
        goTo,
        circleProps: { phase, x: origin.x, y: origin.y, onTransitionEnd: handleTransitionEnd },
    }
}