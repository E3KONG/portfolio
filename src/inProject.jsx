import Nav from './Nav.jsx'

import './css/general.css'
import './css/priject-dark.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#inProjectRoot'))

root.render (
    <>
        <Nav />
    </>
)