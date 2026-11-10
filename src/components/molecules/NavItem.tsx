import type { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { MouseEventHandler } from 'react'

interface NavItemProps {
    to: string
    label: string
    icon: IconType
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function NavItem({ to, label, icon: Icon, onClick }: NavItemProps) {
    return (
        <NavLink
            to={to}
            end={to === '/'}
            onClick={onClick}
            aria-label={label}
            title={label}
            className={({ isActive }) =>
                cn(
                    'grid size-10 md:size-11.5 place-items-center rounded-full transition-colors duration-(--dur-s) ease-brand',
                    isActive ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-elev-2 hover:text-text',
                )
            }
        >
            <Icon aria-hidden="true" className="size-5" />
        </NavLink>
    )
}