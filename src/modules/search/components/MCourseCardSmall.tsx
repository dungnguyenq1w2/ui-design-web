interface MCourseCardSmallProps {
    id: string
    image: string
    title?: string
    description?: string
    creator?: string
    currentPrice?: number
    originalPrice?: number
    enroll?: number
    duration?: number
    rating?: number
    ratingCount?: number
}

const MCourseCardSmall = (props: MCourseCardSmallProps) => {
    return (
        <div
            // className='flex justify-start max-w rounded shadow-lg border border-slate-300 m-2'
            // className='w-[45vw] rounded shadow-lg border border-slate-300 mx-2 my-3'
            //max-w
            className='w-[43vw] rounded shadow-md border border-slate-300 mx-1 my-3'
        >
            <img
                className='w-full object-cover'
                src={props?.image}
                // src={require(item.image)}
                alt={props?.title ?? ''}
            />
            <div className='py-2 px-1 flex flex-col justify-between'>
                <p className='font-bold text-base mb-2 truncate'>{props?.title}</p>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <p className='font-bold text-gray-700 text-sm'>
                            {props?.currentPrice === 0 ? 'Free' : `$${props?.currentPrice}`}
                        </p>
                        <p className='text-gray-700 text-sm line-through ml-1'>
                            {`$${props?.originalPrice}`}
                        </p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='font-medium text-gray-700 text-sm'>{props?.rating}</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-4 h-4 text-yellow-400'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-1'>
                    <p className='font-bold text-gray-700 text-sm'>{props?.creator}</p>
                    <button
                        type='button'
                        className='text-sm bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-1 px-2 border-2 border-green-500 hover:border-transparent rounded-lg'
                    >
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MCourseCardSmall
