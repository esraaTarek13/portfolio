import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/components/templates/MainLayout'
import Home from '@/Pages/Home/Home'
import About from '@/Pages/About/About'
import Work from '@/Pages/Work/Work'
import Journal from '@/Pages/Journal/Journal'
import Reel from '@/Pages/Reel/Reel'
import Contact from '@/Pages/Contact/Contact'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'work', element: <Work /> },
            { path: 'journal', element: <Journal /> },
            { path: 'reel', element: <Reel /> },
            { path: 'contact', element: <Contact /> },
        ],
    }
])