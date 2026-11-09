import { Outlet } from 'react-router-dom'
import { sections } from '@/config/sections'
import BrandLink from '../molecules/BrandLink'
import NavItem from '../atoms/NavItem'

export function MainLayout() {
  return (
    <>
    <BrandLink darkSrc="images/light-logo.jfif" lightSrc="images/dark-logo.jfif" label="gg" />
      <nav className="flex gap-2 p-4">
        {sections.map(({ id, path, icon }) => (
          <NavItem key={id} to={path} label={id} icon={icon} />
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}