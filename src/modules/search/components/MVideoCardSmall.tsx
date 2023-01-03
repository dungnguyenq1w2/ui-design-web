interface IMVideoCardSmallProps {
    id: string
    image: string
    title?: string
    creator?: string
    view?: number
    duration?: number
    rating: number
}

const MVideoCardSmall = (props: IMVideoCardSmallProps) => {
    return (
        <div
            className={`relative flex flex-col justify-between w-[43vw] h-[43vw] rounded shadow-lg border border-slate-300 mx-1 my-3`}
        >
            <img
                className='object-cover h-full'
                src={props?.image}
                // src={require(item.image)}
                alt={props?.title ?? ''}
            />

            <div className='w-full flex flex-col bg-gray-900 opacity-70 absolute bottom-0 px-1 py-1'>
                <p className='font-bold text-base mb-2 truncate text-white'>{props?.title}</p>
                <div className='flex justify-between'>
                    <p className='text-white font-semibold text-sm'>{props?.creator}</p>
                    <div className='flex items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-4 h-4 text-white'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                        </svg>
                        <p className='ml-1 font-semibold text-white text-sm mb-0.5'>
                            {props?.view}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MVideoCardSmall
