'use client';

import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="grid justify-items-center gap-2 p-4">
      <Title text="
          Oh, you are here!"/>
      <Image priority alt="blush-anime" src="/gifs/blush-anime.gif" width={400} height={100} className="w-[400px] h-auto m-auto rounded-md" />
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
