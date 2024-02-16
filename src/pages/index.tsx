import { Source_Sans_3 } from "next/font/google";

import Hero from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import SocialFooter from "~/components/SocialFooter";
import EmailFooter from "~/components/EmailFooter";
import Featured from "~/components/Featured";
import CopyrightFooter from "~/components/CopyrightFooter";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <div className="slide-from-bottom mx-auto flex w-full flex-col items-center xl:w-[calc(100%-4vw)] xl:max-w-[72rem]">
        <Navbar /> */}
      <div className="z-10 w-full bg-white pt-8 text-[#212931] shadow-[-20px_0_20px_-20px_#0008,_20px_0_20px_-20px_#0008]">
        <Featured />
        <EmailFooter />
        <SocialFooter />
      </div>
      {/* </div> */}
      <CopyrightFooter />
    </main>
  );
}
