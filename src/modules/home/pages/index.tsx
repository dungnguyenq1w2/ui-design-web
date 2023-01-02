import CFooter from '~/common/components/CFooter'
import '../assets/style/index.css'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video3.mp4'
import video4 from '../assets/video/video4.mp4'

import { MHeader, MVideoItem } from '../components'

export interface IMHomeProps {
    id?: string
}

const videos = [
    {
        id: 'video1',
        src: video1,
        info: {
            chanel: 'Jessica',
            title: 'Hello world - Design pattern',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsum.',
        },
        actions: {
            upvote: {
                isPressed: false,
                num: 0,
            },
            comments: [
                {
                    id: 1,
                    name: 'Peter',
                    content:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, accusamus.',
                    created_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Linda',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, numquam.',
                    created_at: new Date(),
                },
            ],
            bookmark: {
                isPressed: false,
                num: 22,
            },
            share: {
                isPressed: false,
                num: 33,
            },
        },
    },
    {
        id: 'video2',
        src: video2,
        info: {
            chanel: 'JS Advanced',
            title: 'Learn JS in 1 hour',
            description:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque!',
        },
        actions: {
            upvote: {
                isPressed: true,
                num: 4,
            },
            comments: [
                {
                    id: 1,
                    name: 'Nobita',
                    content:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, accusamus.',
                    created_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Shizuka',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, numquam.',
                    created_at: new Date(),
                },
                {
                    id: 3,
                    name: 'Doraemon',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sunt.',
                    created_at: new Date(),
                },
            ],
            bookmark: {
                isPressed: false,
                num: 2,
            },
            share: {
                isPressed: false,
                num: 5,
            },
        },
    },
    {
        id: 'video3',
        src: video3,
        info: {
            chanel: 'Easy OOP',
            title: 'Take easy with OOP',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, veniam!',
        },
        actions: {
            upvote: {
                isPressed: false,
                num: 2,
            },
            comments: [
                {
                    id: 1,
                    name: 'Ngọc Du',
                    content:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.',
                    created_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Tấn Dũng',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, numquam.',
                    created_at: new Date(),
                },
            ],
            bookmark: {
                isPressed: true,
                num: 7,
            },
            share: {
                isPressed: false,
                num: 2,
            },
        },
    },
    {
        id: 'video4',
        src: video4,
        info: {
            chanel: 'Frontend',
            title: 'HTML, CSS, JS Basic',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsum.',
        },
        actions: {
            upvote: {
                isPressed: true,
                num: 3,
            },
            comments: [
                {
                    id: 1,
                    name: 'Peter',
                    content:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, accusamus.',
                    created_at: new Date(),
                },
                {
                    id: 2,
                    name: 'Linda',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, numquam.',
                    created_at: new Date(),
                },
            ],
            bookmark: {
                isPressed: false,
                num: 6,
            },
            share: {
                isPressed: true,
                num: 1,
            },
        },
    },
]

export default function MHome() {
    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            <div className='flex justify-center gap-8 overflow-x-hidden px-4 text-xs font-semibo h-[3vh]'>
                <span className='font-bold underline underline-offset-8'>RECOMMENDED</span>
                <span className=''>FOLLOWED</span>
                <span className=''>COURSES</span>
            </div>
            <section className='app__videos h-[80vh] overflow-y-scroll w-screen snap-mandatory snap-y'>
                {videos.map((video) => (
                    <MVideoItem key={video.id} video={video} />
                ))}
            </section>
            <CFooter />
        </div>
    )
}
