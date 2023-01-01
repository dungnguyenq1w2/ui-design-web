import { FormEvent, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

export interface IMHeaderProps {
    id?: string
}

export default function MHeader() {
    //#region Data
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    //#endregion

    //#region Event
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputValue = input.trim()
        if (!inputValue) return

        navigate({
            pathname: '/search',
            search: createSearchParams({
                search: input,
            }).toString(),
        })
    }
    //#endregion
    return (
        <div className='flex p-4 items-center h-[9vh]'>
            <form
                onSubmit={handleSearchSubmit}
                className='flex flex-1 bg-gray-200 p-2 rounded-full'
            >
                <button type='submit' title='Search'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                        />
                    </svg>
                </button>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Search...'
                    className='pl-2 w-full bg-transparent text-sm focus:outline-none focus:ring-transparent'
                />
            </form>
            <div className='ml-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8 text-white'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                </svg>
            </div>
        </div>
    )
}
