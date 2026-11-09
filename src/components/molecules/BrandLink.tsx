import { Link } from 'react-router-dom'
import Logo from '@/components/atoms/Logo'

interface BrandLinkProps {
    darkSrc: string
    lightSrc: string
    label: string
}

export default function BrandLink({ darkSrc, lightSrc, label }: BrandLinkProps) {
    return (
        <Link
            to="/"
            aria-label={label}
            className="block w-fit rounded-full transition-opacity duration-(--dur-s) ease-brand hover:opacity-85"
        >
            <Logo src={darkSrc} className="light:hidden" />
            <Logo src={lightSrc} className="hidden light:block" />
        </Link>
    )
}