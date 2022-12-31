import * as React from 'react'

export interface ICFooterProps {
    id?: string
}

export default function CFooter(props: ICFooterProps) {
    return <div className='fixed bottom-0 h-[5vh] bg-blue-500 w-full'>Footer</div>
}
