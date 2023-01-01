import { useNavigate } from 'react-router-dom'
import CFooter from './CFooter'

export default function CReference() {
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
                <span className='flex-1 font-bold text-center mr-6 text-lg'>References</span>
            </div>
            <div className='flex flex-col flex-1 items-center'>
                <div className='flex p-4 shadow-lg border border-slate-300 mx-2 my-3 p-1 items-center'>
                    <div className='flex flex-col'>
                        <p className='text-blue-600 font-bold underline'>
                            JavaScript: The Definitive Guide
                        </p>
                        <p>A very classical book for whom learning Javascript</p>
                    </div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
                <div className='flex p-4 m-2 shadow-lg border border-slate-300 mx-2 my-3 p-1 items-center'>
                    <div className='flex flex-col'>
                        <p className='text-blue-600 font-bold underline'>
                            JavaScript: The Definitive Guide
                        </p>
                        <p>A very classical book for whom learning Javascript</p>
                    </div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
