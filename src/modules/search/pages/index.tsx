import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { MHeader } from '../components'
import MCourseCard from '../components/MCourseCard'
import MCreatorCard from '../components/MCreatorCard'
import MVideoCard from '../components/MVideoCard'
import { Search } from '../model/Search'
export interface IMSearchProps {
    id?: string
}

// import logo from '../assets/images/js-from-basic.png'

const data: Search[] = [
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/js-from-basic.png',
        title: 'test',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    //
    {
        id: uuidv4(),
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
        type: 'course',
    },
    {
        id: uuidv4(),
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
        type: 'course',
    },
    {
        id: uuidv4(),
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
        type: 'course',
    },
    {
        id: uuidv4(),
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
        type: 'course',
    },
    //
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: 'src/modules/search/assets/images/creator01.png',
        name: 'Programer',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
]

export default function MSearch() {
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const type = searchParams.get('type')

    const searchVideos =
        keyword && keyword != ''
            ? [...data].filter(
                  (item) => item.type == 'video' && item.title?.toLowerCase().includes(keyword),
              )
            : [...data]

    const searchCourses =
        keyword && keyword != ''
            ? [...data].filter(
                  (item) => item.type == 'course' && item.title?.toLowerCase().includes(keyword),
              )
            : [...data]

    const searchCreators =
        keyword && keyword != ''
            ? [...data].filter(
                  (item) => item.type == 'creator' && item.name?.toLowerCase().includes(keyword),
              )
            : [...data]

    return (
        <div className='flex flex-col flex-1'>
            <MHeader data={data} />
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
                    <section className='h-[82.5vh] overflow-y-scroll'>
                        {searchVideos.map((item, index) => {
                            return (
                                <div key={index}>
                                    {/* <MVideoCard {...item} /> */}
                                    <MVideoCard
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        creator={item.creator}
                                        view={item.view}
                                        duration={item.duration}
                                        rating={item.rating}
                                    />
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
                                    <MCourseCard
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        creator={item.creator}
                                        currentPrice={item.currentPrice}
                                        originalPrice={item.originalPrice}
                                        enroll={item.enroll}
                                        duration={item.duration}
                                        rating={item.rating}
                                        ratingCount={item.ratingCount}
                                    />
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
                                    <MCreatorCard
                                        id={item.id}
                                        image={item.image}
                                        name={item?.name}
                                        level={item?.level}
                                        follower={item?.follower}
                                        rating={item.rating}
                                        course={item?.course}
                                        description={item?.description}
                                        badges={item?.badges}
                                    />
                                </div>
                            )
                        })}
                    </section>
                </>
            )}
        </div>
    )
}
