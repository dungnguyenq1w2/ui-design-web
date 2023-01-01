import { useParams, useSearchParams } from 'react-router-dom'
import { MHeader } from '../components'

export interface IMSearchProps {
    id?: string
}

// import logo from '../assets/images/js-from-basic.png'

const videos = [
    {
        id: '001',
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
    },
    {
        id: '002',
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
    },
    {
        id: '003',
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
    },
    {
        id: '004',
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
    },
    {
        id: '005',
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'test',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
    },
]

const courses = [
    {
        id: '001',
        image: 'src/modules/search/assets/images/js.png',
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
    },
    {
        id: '002',
        image: 'src/modules/search/assets/images/js.png',
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
    },
    {
        id: '003',
        image: 'src/modules/search/assets/images/js.png',
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
    },
    {
        id: '004',
        image: 'src/modules/search/assets/images/js.png',
        title: 'test',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
    },
]

export default function MSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const type = searchParams.get('type')

    let searchVideos
    let searchCourses
    let searchCreators

    if (type == 'video') {
        searchVideos =
            keyword && keyword != ''
                ? [...videos].filter((item) => item.title.toLowerCase().includes(keyword))
                : [...videos]
    } else if (type == 'course') {
        searchCourses =
            keyword && keyword != ''
                ? [...courses].filter((item) => item.title.toLowerCase().includes(keyword))
                : [...courses]
    } else if (type == 'creator') {
        searchCreators = keyword && keyword != '' ? [] : []
    } else {
        searchVideos =
            keyword && keyword != ''
                ? [...videos].filter((item) => item.title.toLowerCase().includes(keyword))
                : [...videos]

        searchCourses =
            keyword && keyword != ''
                ? [...courses].filter((item) => item.title.toLowerCase().includes(keyword))
                : [...courses]

        searchCreators = keyword && keyword != '' ? [] : []
    }

    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            {searchVideos && (
                <>
                    <section className='h-[8vh] px-2'>
                        <p>
                            Duration <b>2-5 mins</b> | Rating <b>4-5*</b> | Sort by <b>Popular</b>
                        </p>
                        <p>
                            <b>
                                {searchVideos.length}{' '}
                                {searchVideos.length < 2 ? ' result' : ' results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchVideos.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='max-w-sm rounded overflow-hidden shadow-lg border border-slate-300 mx-2 my-3'
                                >
                                    <img
                                        className='w-full'
                                        src={item.image}
                                        // src={require(item.image)}
                                        alt={item.title ?? ''}
                                    />
                                    <div className='py-2 px-1'>
                                        <p className='font-bold text-xl mb-2'>{item.title}</p>
                                        <div className='flex justify-between'>
                                            <p className='font-bold text-gray-700 text-base'>
                                                {item.creator}
                                            </p>
                                            <p className='font-medium text-gray-700 text-base'>
                                                {item.duration} mins
                                            </p>
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
                                                <p className='ml-1 font-bold text-gray-700 text-base'>
                                                    {item.view}
                                                </p>
                                            </div>
                                            <div className='flex flex-row items-center'>
                                                <p className='font-medium text-gray-700 text-base'>
                                                    {item.rating}
                                                </p>
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
                                    {/* <div className='px-6 pt-4 pb-2'>
                                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                    #photography
                                </span>
                                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                    #travel
                                </span>
                                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                    #winter
                                </span>
                            </div> */}
                                </div>
                            )
                        })}
                    </section>
                </>
            )}
        </div>
    )
}
