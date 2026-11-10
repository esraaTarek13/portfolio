import { motion } from 'motion/react'
import useCursor from '@/hooks/useCursor'
import { cn } from '@/lib/cn'

export default function Cursor() {
    const { x, y, ringX, ringY, visible, hovering } = useCursor()

    return (
        <>
            <motion.div
                aria-hidden="true"
                style={{ x: ringX, y: ringY }}
                className={cn(
                    'pointer-events-none fixed left-0 top-0 z-90 transition-opacity duration-(--dur-s)',
                    visible ? 'opacity-100' : 'opacity-0',
                )}
            >
                <motion.div
                    animate={{ scale: hovering ? 1.6 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="size-9 -translate-1/2 rounded-full border border-accent"
                />
            </motion.div>
            <motion.div
                aria-hidden="true"
                style={{ x, y }}
                className={cn(
                    'pointer-events-none fixed left-0 top-0 z-90 transition-opacity duration-(--dur-s)',
                    visible ? 'opacity-100' : 'opacity-0',
                )}
            >
                <div className="size-2 -translate-1/2 rounded-full bg-accent" />
            </motion.div>
        </>
    )
}