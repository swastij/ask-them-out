/* eslint-disable @next/next/no-img-element */

'use client';

import Title from "@/components/title";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AskOut() {
  const [visibleGif, setVisibleGif] = useState('love-heartbeat.gif')

  useEffect(() => {
    setTimeout(() => {
      setVisibleGif('you-make-my-heart-twerk-twerk-it.gif')
    }, 5000)
  }, [])
  return (
    <div className="bg-pink-100 w-full h-screen flex items-center justify-center gap-2">
      <main className="grid items-center gap-2">
        <Title text=" I need your help in fixing this problem of mine:"/>
        <img alt='ask-gif' src={`/gifs/${visibleGif}`} className="w-[400px] m-auto rounded-md" ></img>

        <div className="flex items-center gap-2 justify-center">
          {visibleGif == "you-make-my-heart-twerk-twerk-it.gif" && <Link aria-label='okay?' href='/final' className="h-[50px] p-2 mt-2 bg-pink-300 border-md border-pink-600 w-fit rounded-md" >
            <p>
              Okay?
            </p>
          </Link>
          }
        </div>
      </main>
    </div>
  );
}
