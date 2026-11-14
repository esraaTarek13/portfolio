import { createBrowserRouter } from 'react-router-dom'
import Home from '@/Pages/Home/Home'
import About from '@/Pages/About/About'
import Work from '@/Pages/Work/Work'
import Contact from '@/Pages/Contact/Contact'
import MainLayout from '@/components/templates/MainLayout'
import Resume from '@/Pages/Resume/Resume'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'resume', element: <Resume /> },
            { path: 'work', element: <Work /> },
            { path: 'contact', element: <Contact /> },
        ],
    }
])