

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

export const dynamic = 'force-static';

export default function PreAsk() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [visibleGif, setVisibleGif] = useState('cartoon-skaroy-extreme-blush.gif')

    useEffect(() => {
        if (isButtonClicked)
            setTimeout(() => {
                setVisibleGif('capoo-letter-capoo-love-letter.gif')
            }, 3000)
    }, [isButtonClicked])


    return (

        <main className="grid justify-items-center gap-2 p-4">
            <Title text="You have a message!" />
            {isButtonClicked && <Image priority alt='ask-gifs' src={`/gifs/${visibleGif}`} width={400} height={400} className="h-[400px] object-cover w-full m-auto rounded-md" />}

            <div className="flex items-center gap-2 justify-center mt-2">
                {!isButtonClicked && <MyButton text='Open' onClick={() => { setIsButtonClicked(true) }} />
                }
                {isButtonClicked && visibleGif == "capoo-letter-capoo-love-letter.gif" && <Link aria-label='what-is-this' href="/ask" className="h-[50px] p-2 mt-2 bg-pink-300 border-md border-pink-600 w-fit rounded-md" >

                    <p className='text-center font-white'>
                        What is this?
                    </p>
                </Link>
                }
            </div>
        </main>
    )
}
