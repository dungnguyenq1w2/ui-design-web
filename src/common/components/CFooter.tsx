import { NavLink } from 'react-router-dom'

export interface ICFooterProps {
    id?: string
}

export default function CFooter() {
    return (
        <nav className='fixed bottom-0 h-[5.5vh] bg-black w-full p-1'>
            <ul className='flex justify-around'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-green-500 flex flex-col items-center'
                                : 'text-white flex flex-col items-center'
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
                            <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
                        </svg>

                        <span className='text-xs'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/quiz'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-green-500 flex flex-col items-center'
                                : 'text-white flex flex-col items-center'
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z'
                                clipRule='evenodd'
                            />
                            <path d='M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z' />
                            <path d='M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z' />
                        </svg>
                        <span className='text-xs'>Quiz</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/new'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-green-500 flex flex-col items-center'
                                : 'text-white flex flex-col items-center'
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'
                                clipRule='evenodd'
                            />
                        </svg>

                        <span className='text-xs'>New</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/course'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-green-500 flex flex-col items-center'
                                : 'text-white flex flex-col items-center'
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path d='M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z' />
                            <path d='M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z' />
                            <path d='M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z' />
                        </svg>

                        <span className='text-xs'>Course</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/profile'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-green-500 flex flex-col items-center'
                                : 'text-white flex flex-col items-center'
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                clipRule='evenodd'
                            />
                        </svg>

                        <span className='text-xs'>Profile</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
