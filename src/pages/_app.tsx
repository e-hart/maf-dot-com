import "~/styles/globals.css";
import type { AppProps } from "next/app";

import styles from "~/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

import { createContext } from "react";
import Hero from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import { useRouter } from "next/router";
import CopyrightFooter from "~/components/CopyrightFooter";
import SocialFooter from "~/components/SocialFooter";
import HeaderBadge from "~/components/HeaderBadge";

export const PortalRefContext = createContext<HTMLDivElement | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const pathname = useRouter().pathname;
  console.log(pathname);

  return (
    <>
      <div
        className={`relative h-screen w-screen overflow-x-clip overflow-y-scroll ${sourceSans3.className} ${styles.bg}`}
      >
        {pathname === "/" ? <Hero /> : <HeaderBadge />}
        <div className="slide-from-bottom mx-auto flex h-fit min-h-screen w-full flex-col items-center xl:w-[calc(100%-4vw)] xl:max-w-[72rem]">
          <Navbar />
          <main className="z-10 w-full overflow-clip bg-white pt-8 text-[#212931] shadow-[-20px_0_20px_-20px_#0008,_20px_0_20px_-20px_#0008]">
            <Component {...pageProps} />
          </main>
          <SocialFooter />
        </div>
        <CopyrightFooter />
      </div>
    </>
  );
}
