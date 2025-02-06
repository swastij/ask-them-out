

'use client';
import MyButton from '@/components/button';
import Title from '@/components/title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

export const dynamic = 'force-static';

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
        <div className="bg-blue-100 h-full w-full flex items-center justify-center">
            <main className="grid justify-items-center gap-2 p-4">

                <Title text={`But I ${(Array(noState + 1).fill(0).map(() => "really ")).toString().replace(/,/g, "")} like you`} isBlue />

                <Image priority alt="pleading-gif" src={`/gifs/${visibleGif}`} width={300} height={400} className="w-full min-w-[300px] h-[400px] object-cover m-auto rounded-md" />

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
