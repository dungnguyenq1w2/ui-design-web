/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../assets/style/video.css'

import { useEffect, useRef, useState } from 'react'
import video1 from '../assets/video/video1.mp4'
import MCommentModal from './MCommentModal'
import MShareModal from './MShareModal'
import MMoreModal from './MMoreModal'

export interface IMVideoProps {
    id?: string
}

export default function MVideo() {
    const [playing, setPlaying] = useState(false)
    const [videoClick, setVideoClick] = useState(false)
    const [actions, setActions] = useState<any>({
        upvote: {
            isPressed: false,
            num: 0,
        },
        comment: {
            isPressed: false,
            num: 1,
        },
        bookmark: {
            isPressed: false,
            num: 2,
        },
        share: {
            isPressed: false,
            num: 3,
        },
    })
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false)
    const videoRef = useRef<any>(null)

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
        setVideoClick((cur) => !cur)
    }

    const handleActionChange = (type: string) => () => {
        const newActions = { ...actions }
        if (type === 'upvote' || type === 'bookmark') {
            if (newActions[type].isPressed) {
                newActions[type].num--
                newActions[type].isPressed = false
            } else {
                newActions[type].num++
                newActions[type].isPressed = true
            }
        } else {
            if (newActions[type].isPressed) return
            else {
                newActions[type].num++
                newActions[type].isPressed = true
            }
        }

        setActions(newActions)
    }

    return (
        <div className='bg-gray-400 h-[60vh] relative'>
            <div className='h-[60vh]'>
                <video
                    className='video__player'
                    loop
                    ref={videoRef}
                    src={video1}
                    // onClick={() => console.log('first')}
                    controls
                >
                    <track kind='captions' />
                </video>
            </div>

            {/* Actions */}
            <div
                className={`absolute bottom-20 right-2 text-white text-xs gap-2 flex flex-col opacity-90 ${
                    videoClick ? 'hidden animate-[blur_0.2s]' : 'visible animate-[blur_0.2s]'
                }`}
            >
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`w-8 h-8 ${
                            actions.upvote.isPressed ? 'text-green-500' : 'text-white'
                        }`}
                        onClick={handleActionChange('upvote')}
                    >
                        <path
                            fillRule='evenodd'
                            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z'
                            clipRule='evenodd'
                        />
                    </svg>
                    <span>{actions.upvote.num}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`w-8 h-8 ${
                            actions.comment.isPressed ? 'text-green-500' : 'text-white'
                        }`}
                        onClick={() => setIsCommentModalOpen((cur) => !cur)}
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                            clipRule='evenodd'
                        />
                    </svg>
                    <span>{actions.comment.num}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`w-8 h-8 ${
                            actions.bookmark.isPressed ? 'text-green-500' : 'text-white'
                        }`}
                        onClick={handleActionChange('bookmark')}
                    >
                        <path
                            fillRule='evenodd'
                            d='M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z'
                            clipRule='evenodd'
                        />
                    </svg>

                    <span>{actions.bookmark.num}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`w-8 h-8 ${
                            actions.share.isPressed ? 'text-green-500' : 'text-white'
                        }`}
                        onClick={() => setIsShareModalOpen((cur) => !cur)}
                    >
                        <path
                            fillRule='evenodd'
                            d='M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z'
                            clipRule='evenodd'
                        />
                    </svg>
                    <span>{actions.share.num}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`w-8 h-8`}
                        onClick={() => setIsMoreModalOpen((cur) => !cur)}
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </div>
            {/* Info */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
            <div className='absolute bottom-16 w-[87%] h-full' onClick={onVideoPress} />
            <div
                className={`absolute bottom-0 w-full h-16 flex p-2 gap-2 items-center bg-gray-800 bg-opacity-80 text-white ${
                    videoClick ? 'hidden animate-[blur_0.2s]' : 'visible animate-[blur_0.2s]'
                }`}
            >
                <div className='flex flex-col items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-8 h-8'
                    >
                        <path
                            fillRule='evenodd'
                            d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                            clipRule='evenodd'
                        />
                    </svg>
                    <span className='text-xs font-semibold'>Jessica</span>
                </div>
                <div className='max-w-80 flex-1'>
                    <p className='text-sm truncate max-w-[11rem] font-semibold'>
                        HELLO WORLD - DESIGN ...
                    </p>
                    <p className='text-xs truncate max-w-[11rem]'>
                        An overview course about design pattern ...
                    </p>
                    <p className='text-xs text-blue-600'>See more</p>
                </div>
                <div>
                    <button className='text-xs rounded-lg bg-green-600 px-2 py-1'>Followed</button>
                </div>
            </div>
            {isCommentModalOpen && <MCommentModal onClose={() => setIsCommentModalOpen(false)} />}
            {isShareModalOpen && (
                <MShareModal
                    onClose={() => setIsShareModalOpen(false)}
                    onShare={() => {
                        handleActionChange('share')()
                        setIsShareModalOpen(false)
                    }}
                />
            )}
            {isMoreModalOpen && <MMoreModal onClose={() => setIsMoreModalOpen(false)} />}
        </div>
    )
}
