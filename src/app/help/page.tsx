

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

export const dynamic = 'force-static';

export default function Help() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    return (
        <main className="grid justify-items-center gap-2 p-4">
            <Title text=
                {isButtonClicked ? "Promise you won't go back okay?" : "You agreed to help me! You are so good!!"}>
            </Title>
            <Image priority alt='help-gifs' src={isButtonClicked ? "/gifs/hopeful-cat.gif" : "/gifs/oz-oz-yarimasu.gif"} width={400} height={100} className="w-[400px] m-auto rounded-md" />
            {isButtonClicked ? <Link aria-label='pre-ask' href="/pre-ask" className="h-[50px] p-2 mt-2 bg-pink-300 border-md border-pink-600 w-fit m-auto rounded-md" >
                <p className='text-center font-white'>
                    Whatever!
                </p>
            </Link>
                :
                <MyButton text="What help do you need?" onClick={() => setIsButtonClicked(true)} />
            }
        </main>
    )
}
