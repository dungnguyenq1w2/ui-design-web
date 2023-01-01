import { NavLink } from 'react-router-dom'

export interface ICFooterProps {
    id?: string
}

export default function CFooter() {
    return (
        <nav className='h-[7vh] bg-black w-full flex items-center'>
            <ul className='flex justify-around items-center w-full'>
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
                                d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                                clipRule='evenodd'
                            />
                            <path
                                fillRule='evenodd'
                                d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z'
                                clipRule='evenodd'
                            />
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
