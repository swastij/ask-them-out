/* eslint-disable @next/next/no-img-element */

'use client';

import MyButton from "@/components/button";
import Title from "@/components/title";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

export default function AskOut() {
    const [visibleGif, setVisibleGif] = useState('kitty-shy.gif')
    const { width, height } = useWindowSize()
    const [isYes, setIsYes] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisibleGif('peach-shy.gif')
        }, 5000)
    }, [])
    return (
        <div className="bg-pink-100 w-full h-screen flex items-center justify-center gap-2">
            <main className="grid items-center gap-2">
                {isYes && <Confetti
                    width={width}
                    height={height}
                />}
                <Title text=
                    {visibleGif == "peach-shy.gif" && !isYes ? "Will you be my valentine?" : (!isYes ? "Um, you are cute and ..." : "US <3 <3 <3")} />

                <img alt='couple-gif' src={isYes ? "/gifs/mochi-mochi-peach-cat.gif" : `/gifs/${visibleGif}`} className="w-[400px] m-auto rounded-md" ></img>

                {visibleGif == "you-make-my-heart-twerk-twerk-it.gif" && <Link href='/final' className="h-[50px] p-2 mt-5 bg-pink-300 border-md border-pink-600 w-fit" >
                    <p>
                        Okay?
                    </p>
                </Link>
                }
                {
                    isYes ? <></> :
                        (visibleGif == "peach-shy.gif" &&
                            <div className="flex items-center gap-2 justify-center mt-2">
                                <MyButton text="YES!!" onClick={() => setIsYes(true)} />

                                <Link aria-label='no' href="/no" className="h-[50px] p-2  bg-pink-300 border-md border-pink-600 w-fit rounded-md" >

                                    <p>
                                        NO :/
                                    </p>
                                </Link>
                            </div>
                        )
                }
            </main>
        </div>
    );
}
