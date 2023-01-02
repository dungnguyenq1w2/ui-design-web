/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Course } from '../pages'
export interface ICourse {
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
// const MCourseCard: React.FC<ICourse> = (course: ICourse) => {
const MCourseCard = ({
    image,
    title,
    description,
    creator,
    originalPrice,
    enroll,
    duration,
    rating,
    ratingCount,
}: ICourse) => {
    return (
        <div
            className='flex justify-start max-w rounded shadow-lg border border-slate-300 m-2'
            // className='flex flex-row max-w-sm rounded bg-white shadow-lg justify-between'
        >
            <img className='max-h-full' src={image} alt={title ?? ''} />
            <div className='flex flex-col mx-1 my-2 flex-1'>
                <p className='text-gray-900 text-base font-semibold'>{title}</p>
                <p className='text-gray-700 text-sm mb-2'>{description}</p>
                <div className='flex justify-between mb-1'>
                    <p className='font-semibold text-gray-900 text-base'>${originalPrice}</p>
                    <p className='font-medium text-gray-900 text-base'>{duration} mins</p>
                </div>
                <div className='flex justify-between mb-1'>
                    <p className='font-normal italic text-gray-700 text-base'>{enroll} enrolls</p>
                    <div className='flex flex-row items-center'>
                        <span className='font-medium text-gray-700 text-base'>{rating}</span>
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
                        <span>({ratingCount})</span>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-gray-900 text-base'>{creator}</p>
                    <button
                        type='button'
                        className='bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-1 px-2 border-2 border-green-500 hover:border-transparent rounded-lg'
                    >
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MCourseCard
