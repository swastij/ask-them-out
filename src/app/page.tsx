/* eslint-disable @next/next/no-img-element */
'use client';

import Title from "@/components/title";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid items-center gap-2">

      <Title text="
          Oh, you are here!"/>
      <img alt="blush-anime" src="/gifs/blush-anime.gif" className="w-[400px] m-auto rounded-md" ></img>
      <Title text="
          I want to ask for your help in something"/>
      <div className="flex mt-2 items-center gap-2 justify-center">
        <Link aria-label="help" href='/help' className="h-[50px] p-2 bg-pink-300 border-md border-pink-600 w-fit rounded-md" >
          <p className='text-center font-white'>
            Alright
          </p>
        </Link>
        <Link aria-label="no-help" href='/no-help' className="h-[50px] p-2 bg-pink-300 border-md border-pink-600 w-fit rounded-md" >
          <p className='text-center font-white'>
            Nope
          </p>
        </Link>
      </div>
    </main>
  );
}
