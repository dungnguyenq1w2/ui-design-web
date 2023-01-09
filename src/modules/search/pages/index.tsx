// import { createSearchParams, Link, useSearchParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { MHeader } from '../components'
import MCourseCard from '../components/MCourseCard'
import MCreatorCard from '../components/MCreatorCard'
import MVideoCard from '../components/MVideoCard'
import { useMemo } from 'react'

import { data } from '../data/SampleData'
import MCourseCardSmall from '../components/MCourseCardSmall'
import MVideoCardSmall from '../components/MVideoCardSmall'
import MCreatorCardSmall from '../components/MCreatorCardSmall'
import { parseStringValue } from '~/utils/utils'

export interface IMSearchProps {
    id?: string
}

// import logo from '../assets/images/js-from-basic.png'

export default function MSearch() {
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const filter = JSON.parse(searchParams.get('filter') ?? '{}')

    const searchData = useMemo(() => {
        // if (!keyword) {
        //     return data
        // }

        // re{video:...1,course:..2,...3]
        let result = []
        if (filter.type === 'all') {
            result = data
                .filter((e: any) => {
                    if (e?.title) return e.title.toLowerCase().includes(keyword)
                    else if (e?.name) return e.name.toLowerCase().includes(keyword)
                })
                .reduce((obj: any, cur: any) => {
                    if (cur.type === 'video') {
                        const newVideos: any[] =
                            obj?.videos == undefined ? [cur] : [...obj.videos, cur]
                        return { ...obj, videos: newVideos }
                    } else if (cur.type === 'course') {
                        const newCourses: any[] =
                            obj?.courses == undefined ? [cur] : [...obj.courses, cur]
                        return { ...obj, courses: newCourses }
                    } else if (cur.type === 'creator') {
                        const newCreators: any[] =
                            obj?.creators == undefined ? [cur] : [...obj.creators, cur]
                        return { ...obj, creators: newCreators }
                    }
                }, {})
            // const videos = result.filter((item: any) => item?.type === 'video')
            // const courses = result.filter((item: any) => item?.type === 'course')
            // const creators = result.filter((item: any) => item?.type === 'creator')
            // result = { videos: videos, courses: courses, creators: creators }
        } else {
            result = data.filter((e: any) => {
                if (e.type === filter.type) {
                    if (e?.title) return e.title.toLowerCase().includes(keyword)
                    else if (e?.name) return e.name.toLowerCase().includes(keyword)
                } else {
                    return false
                }
            })

            if (filter.type === 'video') {
                if (filter[filter.type].duration) {
                    const tokens = filter[filter.type].duration.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.duration >= parseInt(tokens[0]) &&
                            video?.duration <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.rating >= parseInt(tokens[0]) &&
                            video?.rating <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].sortby) {
                    const sortby = filter[filter.type].sortby
                    if (sortby === 'popular') {
                        result = result.sort((a: any, b: any) => b?.view - a?.view)
                    } else if (sortby === 'rating') {
                        result = result.sort((a: any, b: any) => b?.rating - a?.rating)
                    }
                }
            } else if (filter.type === 'course') {
                // const courseFilter: any = {}
                // if (filter[filter.type].duration) {
                //     const tokens = filter[filter.type].duration.split(',')
                //     courseFilter.duration = {}
                //     courseFilter.duration.low = parseInt(tokens[0])
                //     courseFilter.duration.high = parseInt(tokens[1])
                // }
                // if (filter[filter.type].price) {
                //     const tokens = filter[filter.type].price.split(',')
                //     courseFilter.price = {}
                //     courseFilter.price.low = parseInt(tokens[0])
                //     courseFilter.price.high = parseInt(tokens[1])
                // }
                // if (filter[filter.type].rating) {
                //     const tokens = filter[filter.type].rating.split(',')
                //     courseFilter.rating = {}
                //     courseFilter.rating.low = parseInt(tokens[0])
                //     courseFilter.rating.high = parseInt(tokens[1])
                // }
                // if (filter[filter.type].sortby) {
                //     courseFilter.sortby = filter[filter.type].sortby
                // }

                if (filter[filter.type].duration) {
                    const tokens = filter[filter.type].duration.split(',')
                    result = result.filter(
                        (course: any) =>
                            course?.duration >= parseInt(tokens[0]) &&
                            course?.duration <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].price) {
                    const tokens = filter[filter.type].price.split(',')
                    result = result.filter(
                        (course: any) =>
                            course?.currentPrice >= parseInt(tokens[0]) &&
                            course?.currentPrice <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    result = result.filter(
                        (course: any) =>
                            course?.rating >= parseInt(tokens[0]) &&
                            course?.rating <= parseInt(tokens[1]),
                    )
                }
                // result = result.filter((e: any) => {
                //     let isMatch = true
                //     if (courseFilter?.duration) {
                //         isMatch =
                //             e.duration >= courseFilter.duration.low &&
                //             e.duration <= courseFilter.duration.high
                //     }
                //     if (courseFilter?.price) {
                //         isMatch =
                //             e.currentPrice >= courseFilter.price.low &&
                //             e.currentPrice <= courseFilter.price.high
                //     }
                //     if (courseFilter?.duration) {
                //         isMatch =
                //             e.rating >= courseFilter.rating.low &&
                //             e.rating <= courseFilter.rating.high
                //     }

                //     return isMatch
                //     // e.duration >= courseFilter.duration.low &&
                //     // e.duration <= courseFilter.duration.high &&
                //     // e.currentPrice >= courseFilter.price.low &&
                //     // e.currentPrice <= courseFilter.price.high &&
                //     // e.rating >= courseFilter.rating?.low &&
                //     // e.rating <= courseFilter.rating?.high,
                // })

                // if (courseFilter.sortby !== 'all') {
                //     if (courseFilter.sortby === 'popular') {
                //         result = result.sort((a: any, b: any) => {
                //             return b?.enroll - a?.enroll
                //         })
                //     } else if (courseFilter.sortby === 'rating') {
                //         result = result.sort((a: any, b: any) => {
                //             return b?.rating - a?.rating
                //         })
                //     }
                // }
                if (filter[filter.type].sortby) {
                    const sortby = filter[filter.type].sortby
                    if (sortby === 'popular') {
                        result = result.sort((a: any, b: any) => b?.enroll - a?.enroll)
                    } else if (sortby === 'rating') {
                        result = result.sort((a: any, b: any) => b?.rating - a?.rating)
                    }
                }
            } else if (filter.type === 'creator') {
                if (filter[filter.type].level) {
                    result = result.filter(
                        (creator: any) => creator?.level === filter[filter.type].level,
                    )
                }

                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.rating >= parseInt(tokens[0]) &&
                            video?.rating <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].sortby) {
                    const sortby = filter[filter.type].sortby
                    if (sortby === 'popular') {
                        result = result.sort((a: any, b: any) => b?.follower - a?.follower)
                    } else if (sortby === 'rating') {
                        result = result.sort((a: any, b: any) => b?.rating - a?.rating)
                    }
                }
            }
        }

        return result
    }, [filter, keyword])

    console.log('Search data: ', searchData)

    return (
        <div className='flex flex-col flex-1'>
            <MHeader data={data} />
            {filter?.type == 'video' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration{' '}
                            <b>{parseStringValue(filter[filter.type].duration, '1000', 'mins')}</b>
                        </span>
                        <span>
                            | Rating <b>{parseStringValue(filter[filter.type].rating, '5', '*')}</b>
                        </span>
                        <span>
                            | Sort by{' '}
                            <b className='capitalize'>{filter[filter.type].sortby ?? 'All'}</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[82.5vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MVideoCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : filter?.type == 'course' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration{' '}
                            <b>{parseStringValue(filter[filter.type].duration, '1000', 'hours')}</b>
                        </span>
                        <span>
                            | Price{' '}
                            <b>{parseStringValue(filter[filter.type].price, '1000', '$')}</b>
                        </span>
                        <span>
                            | Rating <b>{parseStringValue(filter[filter.type].rating, '5', '*')}</b>
                        </span>
                        <span>
                            | Sort by{' '}
                            <b className='capitalize'>{filter[filter.type].sortby ?? 'All'}</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCourseCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : filter?.type == 'creator' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Level <b className='capitalize'>{filter[filter.type].level ?? 'All'}</b>{' '}
                        </span>
                        <span>
                            | Rating <b>{parseStringValue(filter[filter.type].rating, '5', '*')}</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCreatorCard {...item} />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : filter?.type === 'all' ? (
                <div className='px-1'>
                    <div className='flex justify-between'>
                        <p className='px-2'>
                            <b>{`Courses (${searchData?.courses?.length ?? 0})`}</b>
                        </p>
                        {/* <Link
                            to={`/search?${createSearchParams({
                                keyword: keyword ?? '',
                                filter: JSON.stringify({ ...filter, type: 'course' }),
                            })}`}
                            className='px-2 mt-1 text-sky-400 text-sm font-medium'
                        >
                            See more
                        </Link> */}
                        {searchData?.courses?.length > 2 && (
                            <p className='px-2 mt-1 text-sky-400 text-sm font-medium'>See more</p>
                        )}
                    </div>
                    <section className='flex overflow-x-scroll'>
                        {searchData?.courses?.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCourseCardSmall {...item} />
                                </div>
                            )
                        })}
                        {/* <MCourseCardSmall {...item} key={index} /> */}
                    </section>
                    <div className='flex justify-between'>
                        <p className='px-2'>
                            <b>{`Videos (${searchData?.videos?.length ?? 0})`}</b>
                        </p>
                        {searchData?.courses?.length > 2 && (
                            <p className='px-2 mt-1 text-sky-400 text-sm font-medium'>See more</p>
                        )}
                    </div>
                    <section className='flex overflow-x-scroll'>
                        {searchData?.videos?.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MVideoCardSmall {...item} />
                                </div>
                            )
                        })}
                    </section>
                    <div className='flex justify-between'>
                        <p className='px-2'>
                            <b>{`Creators (${searchData?.creators?.length ?? 0})`}</b>
                        </p>
                        {searchData?.courses?.length > 2 && (
                            <p className='px-2 mt-1 text-sky-400 text-sm font-medium'>See more</p>
                        )}
                    </div>
                    <section className='overflow-x-scroll flex'>
                        {searchData?.creators?.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCreatorCardSmall {...item} />
                                </div>
                            )
                        })}
                    </section>
                </div>
            ) : null}
            {/* <MVideoCard {...item} /> */}
        </div>
    )
}
