import { cn } from '@nextui-org/react'
import React from 'react'

export default function Title({ text, isBlue }: { text: string, isBlue?: boolean }) {
    return (
        <h1 className={cn(isBlue ? "text-blue-600" : "text-pink-600", "text-3xl font-bold  text-center m-auto")}>
            {text}
        </h1>
    )
}
