import "~/styles/globals.css";
import type { AppProps } from "next/app";

import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

import { createContext } from "react";
import Hero from "~/components/Hero";
import { Nav } from "~/components/Layout/Nav";
import { useRouter } from "next/router";
import CopyrightFooter from "~/components/Layout/CopyrightFooter";
import SocialFooter from "~/components/Layout/SocialFooter";
import HeaderBadge from "~/components/Layout/HeaderBadge";
import useScrollToTop from "~/hooks/useScrollToTop";
import useIsMobile from "~/hooks/useIsMobile";
import EmailFooter from "~/components/Layout/EmailFooter";

export const PortalRefContext = createContext<HTMLDivElement | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();
  const pathname = useRouter().pathname;
  useScrollToTop(pathname, isMobile);

  return (
    <>
      <div
        id="wrapper"
        className={`fixed z-0 h-full w-full overflow-x-clip overflow-y-scroll bg-[image:_linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.12)),url(/images/maf_couch.jpg),url(/images/bg.jpg)] bg-[cover,contain,cover] bg-[position:center,top,center] bg-no-repeat xl:bg-[cover,90%,cover] xl:bg-center ${sourceSans3.className}`}
      >
        {pathname === "/" ? <Hero /> : <HeaderBadge />}

        <div className="slide-from-bottom mx-auto flex h-fit w-full flex-col items-center xl:w-[calc(100%-4vw)] xl:max-w-[72rem]">
          <Nav />

          <main className="z-10 w-full overflow-clip bg-white py-24 text-[#212931] shadow-[-20px_0_20px_-20px_#0008,_20px_0_20px_-20px_#0008]">
            <Component {...pageProps} />
          </main>

          {pathname === "/" && <EmailFooter />}
          <SocialFooter />
        </div>

        <CopyrightFooter />
      </div>
    </>
  );
}
