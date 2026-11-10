import { cn } from '@/lib/cn'

export type TransitionPhase = 'idle' | 'covering' | 'revealing'

interface TransitionCircleProps {
    phase: TransitionPhase
    x: number
    y: number
    onTransitionEnd: () => void
}

export default function TransitionCircle({ phase, x, y, onTransitionEnd }: TransitionCircleProps) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'fixed inset-0 z-50 overflow-hidden',
                phase === 'idle' ? 'pointer-events-none' : 'pointer-events-auto',
            )}
        >
            <div
                onTransitionEnd={onTransitionEnd}
                style={{ left: x, top: y }}
                className={cn(
                    'absolute size-[300vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent',
                    'transition-transform duration-(--dur-m) ease-brand',
                    phase === 'covering' ? 'scale-100' : 'scale-0',
                )}
            />
        </div>
    )
}