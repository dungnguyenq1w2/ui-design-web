import moment from 'moment'
import { useState } from 'react'
export interface IMCommentModalProps {
    comments: [any]
    onClose: () => void
    onComment: (input: string) => void
}

export default function MCommentModal({ comments, onClose, onComment }: IMCommentModalProps) {
    const [input, setInput] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const inputValue = input.trim()

        if (!inputValue) {
            setInput('')
            return
        }

        onComment(input)

        setInput('')
    }

    return (
        <div className='fixed bottom-0 w-full bg-white z-10 border-t h-[27rem] '>
            <div className='flex justify-between p-2 '>
                <h1 className='text-center flex-1 font-bold ml-6'>COMMENT</h1>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 text-red-600'
                    onClick={onClose}
                >
                    <path
                        fillRule='evenodd'
                        d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                        clipRule='evenodd'
                    />
                </svg>
            </div>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className='flex items-center py-4 px-2 border-b border-gray-400'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-7 h-7'
                    >
                        <path
                            fillRule='evenodd'
                            d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                            clipRule='evenodd'
                        />
                    </svg>
                    <div className='flex flex-1 items-center p-2 ml-3 bg-gray-300 rounded-lg'>
                        <input
                            type='text'
                            className='w-full border-none bg-transparent px-3 text-sm outline-none focus:outline-none focus:ring-transparent'
                            value={input}
                            placeholder='Write your comment ...'
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <button type='submit'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-6 h-6 text-blue-600'
                            >
                                <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className='h-[20rem] max-h-[20rem] overflow-x-auto'>
                {comments.map((comment: any) => (
                    <div key={comment.id} className='flex items-center py-2 px-3'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <div className='ml-2 flex-1'>
                            <span className='text-sm text-gray-700 font-semibold mr-2'>
                                {comment.name}
                            </span>
                            <span className='text-xs text-gray-400'>
                                {moment(comment.created_at).locale('vi').fromNow()}
                            </span>
                            <p className='text-sm'>{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
