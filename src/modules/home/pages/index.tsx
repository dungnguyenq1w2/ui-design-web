import CFooter from '~/common/components/CFooter'
import '../assets/style/index.css'

import { MHeader, MVideoItem } from '../components'

export interface IMHomeProps {
    id?: string
}

export default function MHome() {
    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            <div className='flex justify-center gap-8 overflow-x-hidden px-4 text-xs font-semibo h-[4vh]'>
                <span className='font-bold underline underline-offset-8'>RECOMMENDED</span>
                <span className=''>FOLLOWED</span>
                <span className=''>COURSES</span>
            </div>
            <section className='h-[80vh] overflow-y-scroll w-screen app__videos'>
                <MVideoItem />
                <MVideoItem />
            </section>
            <CFooter />
        </div>
    )
}
