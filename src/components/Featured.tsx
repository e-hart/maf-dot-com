import Link from "next/link";
import Button from "./Button";

export default function Featured() {
  return (
    <section id="featured" className="flex flex-col items-center pt-20 ">
      <article className="flex flex-col items-center border-b border-neutral-200">
        <h1 className="letter-spacing text-center text-[4rem] font-black">NEW MERCH!</h1>
        <p className="m-8 text-center font-sans font-extralight leading-none">
          The new Honey Bear Handmade crossbody bag, available in many styles (including Rifle Paper
          Co.)! <br />
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
          <Button
            href="https://twitch.tv/MildlyAggressiveFolk"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto mb-12 mt-16"
          >
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
          <Button
            href="https://youtube.com/@MildlyAggressiveFolk"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto mb-12 mt-16"
          >
            Visit Youtube Channel
          </Button>
        </article>
      </section>
    </section>
  );
}
