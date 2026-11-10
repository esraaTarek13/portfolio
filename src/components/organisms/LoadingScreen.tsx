import Spinner from '@/components/atoms/Spinner'
import { cn } from '@/lib/cn'

const SITE_NAME = 'Esraa'
const LOADING_LABEL = 'Loading…'

interface LoadingScreenProps {
    visible: boolean
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
    return (
        <div
            lang="en"
            dir="ltr"
            className={cn(
                'fixed inset-0 z-70 grid place-items-center bg-bg',
                'transition-[opacity,visibility] duration-(--dur-m) ease-brand',
                visible ? 'visible opacity-100' : 'invisible opacity-0',
            )}
        >
            <div className="flex flex-col items-center gap-8">
                <p className="font-display-en text-4xl text-text md:text-5xl">{SITE_NAME}</p>
                <Spinner />
                <p role="status" className="font-mono-en text-xs uppercase tracking-[0.2em] text-faint">
                    {LOADING_LABEL}
                </p>
            </div>
        </div>
    )
}