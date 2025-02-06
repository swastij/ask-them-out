/* eslint-disable @next/next/no-img-element */

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Help() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    return (
        <div className="bg-pink-100 w-full h-screen flex items-center justify-center gap-2">
            <main className="grid items-center gap-2">
                <Title text=
                    {isButtonClicked ? "Promise you won't go back okay?" : "You agreed to help me! You are so good!!"}>
                </Title>
                <img alt='help-gifs' src={isButtonClicked ? "/gifs/hopeful-cat.gif" : "/gifs/oz-oz-yarimasu.gif"} className="w-[400px] m-auto rounded-md" ></img>
                {isButtonClicked ? <Link aria-label='pre-ask' href="/pre-ask" className="h-[50px] p-2 mt-2 bg-pink-300 border-md border-pink-600 w-fit m-auto rounded-md" >
                    <p className='text-center font-white'>
                        Whatever!
                    </p>
                </Link>
                    :
                    <MyButton text="What help do you need?" onClick={() => setIsButtonClicked(true)} />
                }
            </main>
        </div>
    )
}
