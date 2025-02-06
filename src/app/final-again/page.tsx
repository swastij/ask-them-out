'use client';
import MyButton from "@/components/button";
import Title from "@/components/title";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import Image from "next/image";

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
        <main className="grid justify-items-center gap-2">
            {isYes && <Confetti
                width={width}
                height={height}
            />}
            <Title text={visibleGif == "blush-two.gif" && !isYes ? "Please be my valentine? <3" : (!isYes ? "Thank you for reconsidering ..." : "US <3 <3 <3")} />

            <Image priority alt='couple-gif' src={isYes ? "/gifs/mochi-mochi-peach-cat.gif" : `/gifs/${visibleGif}`}  width={400} height={100} className="w-[400px] m-auto rounded-md" />


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
    );
}
