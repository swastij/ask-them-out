/* eslint-disable @next/next/no-img-element */

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function No() {
    const [noState, setNoState] = useState(0);
    const [visibleGif, setVisibleGif] = useState<string>();

    const updateNo = () => {
        //if noState is 3, reset to 0
        setNoState((s) => s + 1 == 3 ? 0 : s + 1);
    }

    useEffect(() => {
        switch (noState) {
            case 0: { setVisibleGif('sad.gif'); break; }
            case 1: { setVisibleGif('heart-broke.gif'); break; }
            case 2: { setVisibleGif('crying.gif'); break; }
        }
    }, [noState])
    return (
        <div className="bg-blue-100 w-full h-screen flex items-center justify-center gap-2">
            <main className="grid items-center gap-2">

                <Title text={`But I ${Array(noState + 1).fill(0).map(() => "really ")} like you`} isBlue />
                
                <img alt="pleading-gif" src={`/gifs/${visibleGif}`} className="w-[400px] m-auto rounded-md" ></img>

                <div className="flex items-center gap-2 justify-center mt-2">
                    <MyButton text="No" onClick={updateNo} isBlue={true} />
                    
                    <Link href='/final-again' className="h-[50px] p-2 bg-blue-300 border-md border-pink-600 w-fit rounded-md" >
                        <p className='text-center font-white'>
                            Fine, ask me again
                        </p>
                    </Link>

                </div>
            </main>
        </div>
    )
}
