import { FormEvent, useEffect, useRef, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import MFilterModal from './MFilterModal'

import MSuggestionSearch from './MSuggestionSearch'
export interface IMHeaderProps {
    data: any
}

// export interface ICourse {
//     id: string
//     image: string
//     title: string
//     description: string
//     creator: string
//     currentPrice: number
//     originalPrice: number
//     enroll: number
//     duration: number
//     rating: number
//     ratingCount: number
// }

export default function MHeader({ data }: IMHeaderProps) {
    //#region Data
    const submitButtonRef = useRef<any>(null)
    const inputRef = useRef<any>(null)
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false)
    const [suggestions, setSuggestions] = useState<any[]>([])
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    const [searchParams] = useSearchParams()

    const [filter, setFilter] = useState(
        // searchParams.get('filter')
        //     ? JSON.parse(searchParams.get('filter') ?? '{}')
        //     :
        {
            type: 'all',
            all: {},
            course: {
                // duration: '0,1000',
                // price: '0,1000',
                // rating: '0,5',
                // sortby: 'all',
                duration: null,
                price: null,
                rating: null,
                sortby: null,
            },
            video: {
                duration: null,
                rating: null,
                sortby: null,
            },
            creator: {
                level: null,
                rating: null,
            },
        },
    )

    const [filterSubmit, setFilterSubmit] = useState<any>({
        type: 'all',
        all: {},
        course: {
            duration: null,
            price: null,
            rating: null,
            sortby: null,
        },
        video: {
            duration: null,
            rating: null,
            sortby: null,
        },
        creator: {
            level: null,
            rating: null,
        },
    })
    // const [searchParams, setSearchParams] = useSearchParams()

    //#endregion

    //#region Event
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputValue = input.trim().toLowerCase()
        // if (!inputValue) return
        // setSearchParams()
        // navigate(`/search?keyword=${inputValue}`)
        // const { type, ...searchFilter } = { ...filterSubmit }
        console.log('🚀 ~ filter', filter)
        console.log({ ...filterSubmit[filterSubmit.type] })
        navigate({
            pathname: '/search',
            search: createSearchParams({
                keyword: inputValue,
                filter: JSON.stringify(filterSubmit),
            }).toString(),
        })
    }

    const handleInputChange = (e: any) => {
        setInput(e.target.value)
        let newSuggestions: any = []

        if (e.target.value) {
            const inputValue = e.target.value.trim().toLowerCase()
            newSuggestions = data
                .filter((e: any) => {
                    if (e?.title) return e.title.toLowerCase().includes(inputValue)
                    else if (e?.name) return e.name.toLowerCase().includes(inputValue)
                })
                .map((e: any) => ({ id: e.id, title: e?.title ? e.title : e.name }))
        } else {
            newSuggestions = []
        }
        const result: any[] = [...newSuggestions].filter(function (item: any, pos: number) {
            return newSuggestions.findIndex((e: any) => e.title === item.title) == pos
        })

        setSuggestions(result)
        setIsSuggestionModalOpen(true)
    }

    const handleFilterApply = () => {
        setFilterSubmit({ ...filter })
        setTimeout(() => {
            submitButtonRef.current.click()
        }, 50)
    }

    useEffect(() => {
        // handleFilterApply()

        if (inputRef.current != null) {
            inputRef.current.focus()
        }
    }, [])
    //#endregion

    return (
        <div className='flex p-3 items-center h-[9vh] relative'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 mr-2'
                onClick={() => navigate(-1)}
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
            </svg>

            <form
                onSubmit={handleSearchSubmit}
                className='flex flex-1 bg-gray-200 p-2 rounded-full'
            >
                <button type='submit' title='Search' ref={submitButtonRef}>
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
                    ref={inputRef}
                    type='text'
                    value={input}
                    onChange={handleInputChange}
                    placeholder='Search...'
                    className='pl-2 w-full bg-transparent text-sm focus:outline-none focus:ring-transparent'
                />
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                    onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                    />
                </svg>
            </form>
            {isSuggestionModalOpen && (
                <MSuggestionSearch
                    suggestions={suggestions}
                    onClose={() => setIsSuggestionModalOpen(false)}
                    onPress={(title: string) => {
                        setInput(title)
                        setIsSuggestionModalOpen(false)
                        setTimeout(() => {
                            return submitButtonRef?.current ? submitButtonRef.current.click() : null
                        }, 50)
                    }}
                />
            )}
            {isFilterModalOpen && (
                <MFilterModal
                    onFilterChange={setFilter}
                    onClose={() => setIsFilterModalOpen(false)}
                    filter={filter}
                    onApply={handleFilterApply}
                />
            )}
        </div>
    )
}
