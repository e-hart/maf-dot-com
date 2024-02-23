import Head from "next/head";

import Hero from "~/components/layout/Hero";
import HeaderBadge from "~/components/layout/HeaderBadge";
import { Nav } from "~/components/layout/Nav";
import EmailFooter from "~/components/layout/EmailFooter";
import SocialFooter from "~/components/layout/SocialFooter";
import CopyrightFooter from "~/components/layout/CopyrightFooter";

import { useRouter } from "next/router";
import useScrollToTop from "~/hooks/useScrollToTop";

import { Source_Sans_3 } from "next/font/google";
import useIsMobile from "~/hooks/useIsMobile";
const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = router.pathname;
  useScrollToTop(pathname);
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Mildly Aggressive Folk | Twitch-streaming String Duo | Atlanta, GA"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://MildlyAggressiveFolk.com/" />
        <meta
          property="og:description"
          content="Mildly Aggressive Folk is a Twitch-streaming Atlanta-based string duo. There's guitar, mandolin, fiddle, and harmonies but don't call it bluegrass. Available for private and public events within 200 miles of Atlanta."
        />
        <meta property="og:image" content="https://mildlyaggressivefolk.com/ogimage.jpg" />
        <meta property="og:image:width" content="1888" />
        <meta property="og:image:height" content="1048" />
        <meta property="og:image:alt" content="Mildly Aggressive Folk" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover"
        />
        <title>Mildly Aggressive Folk | Twitch-streaming String Duo | Atlanta, GA</title>
      </Head>

      <div id="wrapper" className={`bg-wrapper ${sourceSans3.className}`}>
        {pathname === "/" ? <Hero /> : <HeaderBadge />}
        {isMobile ? <Nav /> : null}
        <div className="mx-auto flex h-fit w-full animate-in-from-bottom flex-col items-center xl:w-[calc(100%-4vw)] xl:max-w-[72rem]">
          {!isMobile ? <Nav /> : null}
          <main className="z-10 w-full overflow-clip bg-white py-12 text-primary sm:py-24 ">
            {children}
          </main>
          {pathname === "/" && <EmailFooter />}
          <SocialFooter />
        </div>
        <CopyrightFooter />
      </div>
    </>
  );
}
