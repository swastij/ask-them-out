import { cn } from '@nextui-org/react'
import React from 'react'

export default function MyButton({ text, onClick, isBlue }: { text: string, onClick: () => void, isBlue?: boolean }) {
    return (
        <button aria-label={text} onClick={onClick} className={cn("h-[50px] p-2 min-w-[60px] border-md w-fit rounded-md", isBlue? "bg-blue-300 border-blue-600": "bg-pink-300 border-pink-600")} >
            <p className='text-center font-white'>
                {text}
            </p>
        </button>
    )
}
