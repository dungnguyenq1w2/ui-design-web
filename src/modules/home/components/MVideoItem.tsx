import image1 from '../assets/image/js-from-basic.png'
import image2 from '../assets/image/js.png'
import MVideo from './MVideo'

export interface IMVideoItemProps {
    video: any
}

export default function MVideoItem({ video }: IMVideoItemProps) {
    return (
        <div className='h-[80vh] relative snap-start'>
            <MVideo video={video} />
            <div className='flex flex-col h-[20vh]'>
                <div className='flex justify-between items-center px-2 py-1'>
                    <span className='text-sm font-bold'>On this course:</span>
                    <button className='text-xs px-3 py-1 rounded-full border border-green-600 text-green-600 font-semibold'>
                        Enroll
                    </button>
                </div>
                <div className='bg-gray-300 flex items-center justify-between flex-1'>
                    <button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                    <div className='flex justify-around flex-1'>
                        <img src={image1} alt='image1' className='object-cover w-20' />
                        <img src={image2} alt='image2' className='object-cover w-20' />
                        <img src={image1} alt='image1' className='object-cover w-20' />
                    </div>
                    <button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
