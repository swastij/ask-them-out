

'use client';

import Title from "@/components/title";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export const dynamic = 'force-static';

export default function AskOut() {
  const [visibleGif, setVisibleGif] = useState('love-heartbeat.gif')

  useEffect(() => {
    setTimeout(() => {
      setVisibleGif('you-make-my-heart-twerk-twerk-it.gif')
    }, 5000)
  }, [])
  return (
    <main className="grid justify-items-center gap-2 p-4">
      <Title text=" I need your help in fixing this problem of mine:" />
      <Image priority alt='ask-gif' src={`/gifs/${visibleGif}`} width={400} height={100} className="w-[400px] m-auto rounded-md" />

      <div className="flex items-center gap-2 justify-center">
        {visibleGif == "you-make-my-heart-twerk-twerk-it.gif" && <Link aria-label='okay?' href='/final' className="h-[50px] p-2 mt-2 bg-pink-300 border-md border-pink-600 w-fit rounded-md" >
          <p>
            Okay?
          </p>
        </Link>
        }
      </div>
    </main>
  );
}
