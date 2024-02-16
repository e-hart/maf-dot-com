import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { createPortal } from "react-dom";
import { useContext, useEffect, useRef } from "react";
import { Navbar } from "~/components/Navbar";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";
import Hero from "~/components/Hero";
import Button from "~/components/Button";
import Link from "next/link";
import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitchLogo,
  YouTubeLogo,
} from "~/components/Logos";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="slide-from-bottom mx-auto flex w-full flex-col items-center xl:w-[calc(100%-4vw)] xl:max-w-[72rem]">
        <Navbar />
        <div className="z-10 mb-24 w-full bg-white pt-8 text-[#212931] shadow-[-20px_0_20px_-20px_#0008,_20px_0_20px_-20px_#0008]">
          <section id="featured" className="flex flex-col items-center pt-20 ">
            <article className="flex flex-col items-center border-b border-neutral-200">
              <h1 className="letter-spacing text-center text-[4rem] font-black">NEW MERCH!</h1>
              <p className="mx-8 my-8 text-center font-sans font-extralight leading-none">
                The new Honey Bear Handmade crossbody bag, available in many styles (including Rifle
                Paper Co.)! <br />
                <br />
                Check out the shop for the crossbody and other Stephanie-made merch.
              </p>
              <div className="not-subtle-shadow relative z-20 mx-auto mt-16 p-4 transition-transform hover:scale-[1.01]">
                <Link href="/shop">
                  <img src="/images/crossbody.jpg" alt="crossbody bags" />
                </Link>
                {/* <div className="absolute inset-0 m-4 mx-auto mt-20 w-[calc(75%-2rem)] bg-[image:radial-gradient(ellipse,_transparent,_rgba(0,_0,_0,_0.4))] " /> */}
              </div>
              <Button href="/" className="mb-24 mt-16">
                Shop Now
              </Button>
            </article>
            <section id="links" className="flex w-full flex-wrap justify-around sm:flex-nowrap">
              <article className="flex flex-col text-center sm:basis-1/2">
                <h3 className="letter-spacing mt-16 text-center text-[1.75rem] font-black leading-tight">
                  WATCH US LIVE
                  <br />
                  ON TWITCH!
                </h3>
                <img
                  className="not-subtle-shadow mx-auto mt-10 w-3/4 p-4"
                  src="/images/stream.png"
                  alt="MAF performing on stream"
                />
                <p className="mt-16 p-8 text-center font-sans font-light">
                  We stream live every week!
                  <br /> Follow us on Twitch to get notified when we go live.
                </p>
                <Button href="/stream" className="mx-auto mb-12 mt-16">
                  Visit Twitch Channel
                </Button>
              </article>
              <div className=" basis-0 border-r border-neutral-200" />
              <article className="flex flex-col text-center sm:basis-1/2">
                <h3 className="letter-spacing mt-16 text-center text-[1.75rem] font-black leading-tight">
                  CHECK OUT OUR
                  <br />
                  YOUTUBE CHANNEL!
                </h3>
                <img
                  className="not-subtle-shadow mx-auto mt-10 w-3/4 p-4 transition-transform hover:scale-[1.02]"
                  src="/images/youtube_outro_image.png"
                  alt="MAF Video Outro Image"
                />
                <p className="mt-16 p-8 text-center font-sans font-light">
                  New videos every week, listen to MAF on the go!
                  <br />
                  Subscribe to our channel to get notified when we post new videos.
                </p>
                <Button href="/videos" className="mx-auto mb-12 mt-16">
                  Visit Youtube Channel
                </Button>
              </article>
            </section>
          </section>
          <div className="flex min-h-32 w-full items-center gap-4 border-b-2 border-neutral-300 bg-neutral-100 pl-16 text-[.9rem]">
            <h3 className=" font-black uppercase text-neutral-500">Email</h3>
            <a
              href="mailto:mildlyaggressivefolk@gmail.com"
              className="border-b border-dotted border-neutral-500 font-sans font-thin transition-colors hover:border-[#33aaff] hover:text-[#33aaff]"
            >
              mildlyaggressivefolk@gmail.com
            </a>
          </div>
          <div className="flex min-h-32 w-full items-center gap-4 border-b-2 border-neutral-300 bg-neutral-100 pl-16 text-[.9rem]">
            <h3 className=" font-black uppercase text-neutral-500">Social</h3>
            <ul className="mr-4 flex items-center gap-2 text-neutral-500">
              <li className="rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3">
                <a href="https://twitch.tv/mildlyaggressivefolk">
                  <TwitchLogo className="h-6 w-6 p-1" />
                </a>
              </li>
              <li className="rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3">
                <a href="https://www.youtube.com/@mildlyaggressivefolk">
                  <YouTubeLogo className="h-6 w-6" />
                </a>
              </li>
              <li className="rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3">
                <a href="https://discord.gg/mgZzerpuQe">
                  <DiscordLogo className="h-6 w-6" />
                </a>
              </li>
              <li className="rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3">
                <a href="https://instagram.com/mildlyaggressivefolk">
                  <InstagramLogo className="h-6 w-6" />
                </a>
              </li>
              <li className="none rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3">
                <a href="https://www.facebook.com/mildlyaggressivefolk">
                  <FacebookLogo className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
