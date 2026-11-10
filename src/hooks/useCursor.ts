import { useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"]'
const RING_SPRING = { stiffness: 180, damping: 20, mass: 0.6 }

export default function useCursor() {
    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const ringX = useSpring(x, RING_SPRING)
    const ringY = useSpring(y, RING_SPRING)
    const [visible, setVisible] = useState(false)
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

        const root = document.documentElement
        let started = false

        const handleMove = (event: PointerEvent) => {
            if (event.pointerType === 'touch') return
            x.set(event.clientX)
            y.set(event.clientY)
            if (!started) {
                started = true
                ringX.jump(event.clientX)
                ringY.jump(event.clientY)
                root.dataset.cursor = 'custom'
                setVisible(true)
            }
        }

        const handleOver = (event: PointerEvent) => {
            setHovering(event.target instanceof Element && event.target.closest(INTERACTIVE) !== null)
        }

        window.addEventListener('pointermove', handleMove)
        document.addEventListener('pointerover', handleOver)
        return () => {
            window.removeEventListener('pointermove', handleMove)
            document.removeEventListener('pointerover', handleOver)
            delete root.dataset.cursor
        }
    }, [x, y, ringX, ringY])

    return { x, y, ringX, ringY, visible, hovering }
}