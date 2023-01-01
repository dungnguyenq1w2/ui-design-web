/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import bluetooth from '../assets/image/Bluetooth.png'
import content_copy from '../assets/image/Content copy.png'
import email from '../assets/image/Email.png'
import messenger from '../assets/image/Facebook Messenger.png'
import facebook from '../assets/image/Facebook.png'
import telegram from '../assets/image/Telegram App.png'
import sms from '../assets/image/Textsms.png'

export interface IMShareModalProps {
    onClose: () => void
    onShare: () => void
}

export default function MShareModal({ onClose, onShare }: IMShareModalProps) {
    return (
        <div className='fixed bottom-0 w-full bg-white z-10 border-t'>
            <div className='flex justify-between p-2 border-b border-gray-500'>
                <h1 className='text-center flex-1 font-bold ml-6'>SHARE</h1>
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
            <div className='border-b border-gray-500 py-3 px-10 flex flex-wrap gap-12 justify-between'>
                <img src={content_copy} alt='Content copy' className='h-10' onClick={onShare} />
                <img src={messenger} alt='messenger' className='h-10' onClick={onShare} />
                <img src={facebook} alt='facebook' className='h-10' onClick={onShare} />
                <img src={email} alt='email' className='h-10' onClick={onShare} />
                <img src={telegram} alt='telegram' className='h-10' onClick={onShare} />
                <img src={bluetooth} alt='bluetooth' className='h-10' onClick={onShare} />
                <img src={sms} alt='sms' className='h-10' onClick={onShare} />
            </div>
        </div>
    )
}
