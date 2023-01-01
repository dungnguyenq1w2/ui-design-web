import { useParams, useSearchParams } from 'react-router-dom'
import { MHeader } from '../components'
import MCourseCard from '../components/MCourseCard'
import MCreatorCard from '../components/MCreatorCard'
import MVideoCard from '../components/MVideoCard'

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

const creators = [
    {
        id: '001',
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
    },
    {
        id: '002',
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
    },
    {
        id: '003',
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
    },
    {
        id: '004',
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Programer',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
    },
]

export default function MSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const type = searchParams.get('type')

    // let searchVideos
    // let searchCourses
    // let searchCreators

    // if (type == 'video') {
    const searchVideos =
        keyword && keyword != ''
            ? [...videos].filter((item) => item.title.toLowerCase().includes(keyword))
            : [...videos]
    // } else if (type == 'course') {
    const searchCourses =
        keyword && keyword != ''
            ? [...courses].filter((item) => item.title.toLowerCase().includes(keyword))
            : [...courses]
    // } else if (type == 'creator') {
    const searchCreators =
        keyword && keyword != ''
            ? [...creators].filter((item) => item.name.toLowerCase().includes(keyword))
            : [...creators]
    // } else {
    // searchVideos =
    //     keyword && keyword != ''
    //         ? [...videos].filter((item) => item.title.toLowerCase().includes(keyword))
    //         : [...videos]

    // searchCourses =
    //     keyword && keyword != ''
    //         ? [...courses].filter((item) => item.title.toLowerCase().includes(keyword))
    //         : [...courses]

    // searchCreators = keyword && keyword != '' ? [] : []
    // }

    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            {type == 'video' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration <b>2-5 mins</b>
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <span>
                            | Sort by <b>Popular</b>
                        </span>
                        <p>
                            <b>
                                {searchVideos.length}{' '}
                                {searchVideos.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchVideos.map((item, index) => {
                            return (
                                <div key={index}>
                                    <MVideoCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : type == 'course' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration <b>2-5 mins</b>
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <span>
                            | Sort by <b>Popular</b>
                        </span>
                        <p>
                            <b>
                                {searchCourses.length}{' '}
                                {searchCourses.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchCourses.map((item, index) => {
                            return (
                                <div key={index}>
                                    <MCourseCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Level <b>All</b>{' '}
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <p>
                            <b>
                                {searchCreators.length}{' '}
                                {searchCreators.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchCreators.map((item, index) => {
                            return (
                                <div key={index}>
                                    <MCreatorCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            )}
        </div>
    )
}
