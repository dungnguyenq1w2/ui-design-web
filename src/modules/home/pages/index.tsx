import { MHeader } from '../components'
import MVideo from '../components/MVideo'

export interface IMHomeProps {
    id?: string
}

export default function MHome() {
    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            <div className='mb-2 flex gap-8 overflow-x-scroll px-4 py-2 text-white text-sm font-semibo h-[4vh]'>
                <span className='font-bold underline underline-offset-8'>RECOMMENDED</span>
                <span>FOLLOWED</span>
                <span>MY COURSES</span>
            </div>
            <section className='h-[82vh] overflow-y-scroll'>
                <MVideo />
                <MVideo />
                <MVideo />
                <MVideo />
            </section>
        </div>
    )
}
