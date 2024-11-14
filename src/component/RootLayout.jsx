import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
    return <>
        <Nav />
        <main>
            <Outlet />
        </main>
    </>
}

export function Nav() {
    return <>
        <div id='navicon'>EK</div>
        <nav>            
            <Link to='/portfolio'>WORK</Link>
            <Link to='e-cigraette'>ABOUT</Link>
            <Link to='portfolio'>CONTACT</Link>
        </nav>
    </>
}