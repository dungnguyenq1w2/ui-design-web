// const MCourseCard: React.FC<ICourse> = (course: ICourse) => {
const MVideoCard = ({
    id,
    image,
    title,
    creator,
    view,
    duration,
    rating,
}: {
    id: string
    image: string
    title: string
    creator: string
    view: number
    duration: number
    rating: number
}) => {
    return (
        <div
            // className='flex justify-start max-w rounded shadow-lg border border-slate-300 m-2'
            className='max-w rounded overflow-hidden shadow-lg border border-slate-300 mx-2 my-3'
        >
            <img
                className='w-full'
                src={image}
                // src={require(item.image)}
                alt={title ?? ''}
            />
            <div className='py-2 px-1'>
                <p className='font-bold text-xl mb-2'>{title}</p>
                <div className='flex justify-between'>
                    <p className='font-bold text-gray-700 text-base'>{creator}</p>
                    <p className='font-medium text-gray-700 text-base'>{duration} mins</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-5 h-5'
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
                        <p className='ml-1 font-bold text-gray-700 text-base'>{view}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='font-medium text-gray-700 text-base'>{rating}</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-5 h-5 text-yellow-400'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MVideoCard
