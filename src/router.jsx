import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './component/RootLayout.jsx'
import { projects } from './data/projectList.json'

import HomeIndex from './component/HomeIndex.jsx'
import ECigarette from './pages/ECigarette.jsx'


export const router = createBrowserRouter ([
    { path: '/portfolio', element: <RootLayout />,
      children: [
        { index: true, element:<HomeIndex /> },
        { path: 'e-cigraette', element:<ECigarette /> },
      ]
    }
])