import type { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'

interface NavItemProps {
    to: string
    label: string
    icon: IconType
}

export default function NavItem({ to, label, icon: Icon }: NavItemProps) {
    return (
        <NavLink
            to={to}
            end={to === '/'}
            aria-label={label}
            title={label}
            className={({ isActive }) =>
                cn(
                    'grid size-11 place-items-center rounded-full transition-colors duration-(--dur-s) ease-brand md:size-12',
                    isActive ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-elev-2 hover:text-text',
                )
            }
        >
            <Icon aria-hidden="true" className="size-5" />
        </NavLink>
    )
}