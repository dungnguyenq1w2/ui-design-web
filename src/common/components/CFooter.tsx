import { NavLink } from 'react-router-dom'

export interface ICFooterProps {
    id?: string
}

export default function CFooter() {
    return (
        <nav className='fixed bottom-0 h-[5vh] bg-blue-500 w-full'>
            <ul className='flex justify-around'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'text-green-500' : undefined)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='search'
                        className={({ isActive }) => (isActive ? 'text-green-500' : undefined)}
                    >
                        Search
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
