import { MHeader } from '../components'

export interface IMSearchProps {
    id?: string
}

export default function MSearch() {
    return (
        <div className='flex flex-col flex-1'>
            <MHeader />
            <section className='h-[86vh] overflow-y-scroll'>
                <div className='h-80 bg-red-100'>Card</div>
                <div className='h-80 bg-red-100'>Card</div>
                <div className='h-80 bg-red-100'>Card</div>
                <div className='h-80 bg-red-100'>Card</div>
            </section>
        </div>
    )
}
