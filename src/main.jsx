import Nav from './component/RootLayout.jsx'
import IndexBlock from './component/IndexBlock.jsx'

import './css/general.css'
import './css/inedx.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#indexRoot'))

root.render (
    <>
        <Nav />
        <IndexBlock />
    </>
)