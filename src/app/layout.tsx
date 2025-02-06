import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATO",
  description: "Ask them out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
                <link rel='preload' fetchPriority='high' href='/gifs/blush-anime.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/blush-two.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/capoo-letter-capoo-love-letter.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/happy-with-tears.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/cartoon-skaroy-extreme-blush.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/crying.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/heart-broke.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/hopeful-cat.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/kitty-shy.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/love-heartbeat.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/mochi-mochi-peach-cat.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/peach-shy.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/you-make-my-heart-twerk-twerk-it.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/sad.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/gifs/tearful-hamster.gif' as='image' />
                <link rel='preload' fetchPriority='high' href='/images/oz-oz-yarimasu.gif' as='image' />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="bg-pink-100 w-full h-screen flex items-center justify-center gap-2">
        {children}
       
        </div>
      </body>
    </html>
  );
}
