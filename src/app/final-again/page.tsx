'use client';
import MyButton from "@/components/button";
import Title from "@/components/title";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

export default function AskOut() {
    const [visibleGif, setVisibleGif] = useState('happy-with-tears.gif')
    const { width, height } = useWindowSize()
    const [isYes, setIsYes] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisibleGif('blush-two.gif')
        }, 5000)
    }, [])
    return (
        <div className="bg-pink-100 w-full h-screen flex items-center justify-center gap-2">
            <main className="grid items-center gap-2">
                {isYes && <Confetti
                    width={width}
                    height={height}
                />}
                <Title text={visibleGif == "blush-two.gif" && !isYes ? "Please be my valentine? <3" : (!isYes ? "Thank you for reconsidering ..." : "US <3 <3 <3")} />

                <img alt='couple-gif' src={isYes ? "/gifs/mochi-mochi-peach-cat.gif" : `/gifs/${visibleGif}`} className="w-[400px] m-auto rounded-md" ></img>


                {
                    isYes ? <></> :
                        (visibleGif == "blush-two.gif" &&
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
