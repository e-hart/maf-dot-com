import Link from "next/link";
import Button from "./Button";

export default function Featured() {
  return (
    <section id="featured" className="flex flex-col items-center divide-y pt-20 ">
      <article className="flex flex-col items-center  border-neutral-200">
        <h1 className="text-center indent-[0.1em] text-[4rem] font-black tracking-widest">
          NEW MERCH!
        </h1>
        <p className="m-8 text-center font-sans font-extralight leading-none">
          The new Honey Bear Handmade crossbody bag, available in many styles (including Rifle Paper
          Co.)! <br />
          <br />
          Check out the shop for the crossbody and other Stephanie-made merch.
        </p>
        <div className="not-subtle-shadow relative z-20 mx-auto mt-16 w-11/12 p-4 transition-transform hover:scale-[1.01]">
          <Link href="/shop">
            <div className="vignette">
              <img src="/images/crossbody.jpg" alt="crossbody bags" />
            </div>
          </Link>
        </div>
        <Button href="/" className="mb-24 mt-16">
          Shop Now
        </Button>
      </article>
      <section
        id="links"
        className="sm:divide flex w-full flex-wrap justify-around sm:flex-nowrap sm:divide-x"
      >
        <article className="flex flex-col text-center sm:basis-1/2">
          <h3 className="mt-16 text-center indent-[0.1em] text-[1.75rem] font-black leading-tight tracking-widest">
            WATCH US LIVE
            <br />
            ON TWITCH!
          </h3>
          <div className="not-subtle-shadow relative z-20 mx-auto mt-10 w-3/4 p-4 transition-transform hover:scale-[1.01]">
            <div className="vignette">
              <img src="/images/stream.png" alt="MAF performing on stream" />
            </div>
          </div>
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
        <article className="flex flex-col text-center sm:basis-1/2">
          <h3 className="mt-16 text-center indent-[0.1em] text-[1.75rem] font-black leading-tight tracking-widest">
            CHECK OUT OUR
            <br />
            YOUTUBE CHANNEL!
          </h3>
          <div className="not-subtle-shadow relative z-20 mx-auto mt-10 w-3/4 p-4 transition-transform hover:scale-[1.01]">
            <div className="vignette">
              <img src="/images/youtube_outro_image.png" alt="MAF Video Outro Image" />
            </div>
          </div>
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
