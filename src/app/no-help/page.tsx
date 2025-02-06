/* eslint-disable @next/next/no-img-element */

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function NoHelp() {
    const [noState, setNoState] = useState(0);
    const [visibleGif, setVisibleGif] = useState<string>();

    const updateNo = () => {
        //if noState is 3, reset to 0
        setNoState((s) => s + 1 == 3 ? 0 : s + 1);
    }

    useEffect(() => {
        switch (noState) {
            case 0: { setVisibleGif('tearful-hamster.gif'); break; }
            case 1: { setVisibleGif('hopeful-cat.gif'); break; }
            case 2: { setVisibleGif('mochi-cat-waiting.gif'); break; }
        }
    }, [noState])
    return (
        <div className="bg-blue-100 h-full w-full flex items-center justify-center">
        <main className="grid justify-items-center gap-2">
            <Title isBlue text=
                {(Array(noState + 1).fill(0).map(() => "Please? ")).toString().replace(/,/g, "")} />
            <img alt="tearful-gif" src={`/gifs/${visibleGif}`} className="w-[400px] m-auto rounded-md" ></img>

            <div className="flex items-center gap-2 mt-2 justify-center">
                <MyButton text="No" onClick={updateNo} isBlue />
                <Link href='/help' className="h-[50px] p-2 bg-blue-300 border-md border-blue-600 w-fit rounded-md" >
                    <p className='text-center font-white'>
                        Okay, fine
                    </p>
                </Link>

            </div>
        </main>
        </div>

    )
}
