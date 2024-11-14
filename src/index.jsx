import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

import './css/general.css'
import './css/inedx.css'

const root = createRoot(document.querySelector('#root'))

root.render (
    // React.StrictMode is Just for Dev Debugging
    <React.StrictMode> 
        <RouterProvider router={router} />
    </React.StrictMode>
)