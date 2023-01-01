// const MCourseCard: React.FC<ICourse> = (course: ICourse) => {
const MCreatorCard = ({
    id,
    image,
    name,
    level,
    follower,
    rating,
    course,
    description,
    badges,
}: {
    id: string
    image: string
    name?: string
    level?: string
    follower?: number
    rating: number
    course?: number
    description?: string
    badges?: string[]
}) => {
    return (
        <div
            // className='flex justify-start max-w rounded shadow-lg border border-slate-300 m-2'
            className='max-w rounded overflow-hidden shadow-lg border border-slate-300 mx-2 my-3 p-1'
        >
            <div className='flex justify-between items-center'>
                <div className='flex justify-start flex-1 items-center'>
                    <img
                        className='h-full'
                        src={image}
                        // src={require(item.image)}
                        alt={'avatar'}
                    />
                    <div className='flex flex-col ml-1'>
                        <p className='font-bold text-medium'>{name}</p>
                        <div>
                            <span className='text-base'>{level}</span>
                            <span className='text-base'>- {follower} followers</span>
                            <div className='inline-block items-center'>
                                <span className='text-base'>- {rating}</span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-4 h-4 mb-0.5 text-yellow-400 inline-block'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className='text-base'>{course} courses</p>
                    </div>
                </div>
                <button
                    type='button'
                    className='h-10 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white px-2 border-2 border-green-500 hover:border-transparent rounded-full'
                >
                    Follow
                </button>
            </div>
            <p className='font-medium italic text-gray-700 text-base my-1'>{description}</p>
            <div className='px-1 pt-4 pb-2'>
                {badges?.map((badge, index) => {
                    return (
                        <p
                            key={index}
                            className='my-1 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 border border-black mr-2'
                        >
                            {badge}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default MCreatorCard
