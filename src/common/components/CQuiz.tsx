import { useNavigate } from 'react-router-dom'

export default function CQuiz() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col flex-1'>
            <div className='flex p-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                    onClick={() => navigate(-1)}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                    />
                </svg>
                <span className='flex-1 font-bold text-center mr-6 text-lg'>Quiz</span>
            </div>
            <div className='flex flex-col flex-1 items-center'>
                <p className='font-bold text-lg italic'>Let&apos;s answer some question!</p>
                <div className='w-full p-4'>
                    <p className='font-bold'>Question 1</p>
                    <p className='font-bold'>Which answer is true about Javascript</p>
                    <div className='bg-gray-100 p-1'>
                        <div className='flex items-center mb-4'>
                            <input
                                title=''
                                id='default-radio-1'
                                type='radio'
                                value=''
                                name='default-radio'
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                            />
                            <label
                                htmlFor='default-radio-1'
                                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                A. Design Pattern type
                            </label>
                        </div>
                        <div className='flex items-center mb-4'>
                            <input
                                id='default-radio-2'
                                type='radio'
                                value=''
                                name='default-radio'
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                            />
                            <label
                                htmlFor='default-radio-2'
                                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                B. Programing language
                            </label>
                        </div>
                        <div className='flex items-center mb-4'>
                            <input
                                id='default-radio-3'
                                type='radio'
                                value=''
                                name='default-radio'
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                            />
                            <label
                                htmlFor='default-radio-3'
                                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                C. Weapon
                            </label>
                        </div>
                        <div className='flex items-center mb-4'>
                            <input
                                id='default-radio-4'
                                type='radio'
                                value=''
                                name='default-radio'
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                            />
                            <label
                                htmlFor='default-radio-4'
                                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                C. Both are correct
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    type='button'
                    onClick={() => navigate(-1)}
                    className='text-white bg-green-500 font-medium rounded-sm text-sm px-5 py-2.5 text-center my-2'
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
