import type { IconType } from 'react-icons'
import { FiBookOpen, FiGrid, FiHome, FiMail, FiUser, FiVideo } from 'react-icons/fi'

export type SectionId = 'home' | 'about' | 'work' | 'journal' | 'reel' | 'contact'

export interface Section {
    id: SectionId
    path: string
    icon: IconType
}

export const sections: readonly Section[] = [
    { id: 'home', path: '/', icon: FiHome },
    { id: 'about', path: '/about', icon: FiUser },
    { id: 'work', path: '/work', icon: FiGrid },
    { id: 'journal', path: '/journal', icon: FiBookOpen },
    { id: 'reel', path: '/reel', icon: FiVideo },
    { id: 'contact', path: '/contact', icon: FiMail },
]