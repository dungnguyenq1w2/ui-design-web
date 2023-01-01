import * as React from 'react'

export interface IMCommentModalProps {
    id?: string
    onClose: () => void
}

export default function MCommentModal({ onClose }: IMCommentModalProps) {
    return <div className='fixed bottom-0 w-full bg-white z-10 border-t'></div>
}
