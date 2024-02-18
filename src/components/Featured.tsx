import Link from "next/link";
import Button from "./Button";

export default function Featured() {
  return (
    <section id="featured" className="flex flex-col items-center">
      <article className="flex flex-col items-center gap-20 pb-20 pt-4">
        <h1 className="text-center text-[4rem] font-black tracking-widest">NEW MERCH!</h1>

        <p className="mx-8 text-center font-sans font-extralight leading-none">
          The new Honey Bear Handmade crossbody bag, available in many styles (including Rifle Paper
          Co.)! <br />
          <br />
          Check out the shop for the crossbody and other Stephanie-made merch.
        </p>

        <div className="not-subtle-shadow relative z-20 mx-auto w-11/12 p-4 transition-transform hover:scale-[1.01]">
          <Link href="/shop">
            <div className="vignette">
              <img src="/images/crossbody.jpg" alt="crossbody bags" />
            </div>
          </Link>
        </div>

        <Button href="/">Shop Now</Button>
      </article>

      <section
        id="links"
        className="sm:divide flex w-full flex-wrap divide-y sm:flex-nowrap sm:divide-x"
      >
        <article className="grid grid-rows-[1fr_auto] gap-16 border-t border-neutral-200 px-4 py-16 text-center sm:basis-1/2">
          <div className="flex flex-col justify-around gap-16">
            <h3 className=" text-center indent-[0.1em] text-[1.75rem] font-black leading-tight tracking-widest">
              WATCH US LIVE
              <br />
              ON TWITCH!
            </h3>

            <div className="not-subtle-shadow relative z-20 mx-auto w-3/4 p-4 transition-transform hover:scale-[1.01]">
              <div className="vignette">
                <img src="/images/stream.png" alt="MAF performing on stream" />
              </div>
            </div>

            <p className=" px-8 text-center font-sans font-light">
              We stream live every week!
              <br /> Follow us on Twitch to get notified when we go live.
            </p>
          </div>

          <Button
            href="https://twitch.tv/MildlyAggressiveFolk"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto"
          >
            Visit Twitch Channel
          </Button>
        </article>

        <article className="grid grid-rows-[1fr_auto] gap-16 border-t border-neutral-200 px-4 py-16 text-center sm:basis-1/2">
          <div className="flex flex-col justify-around gap-16">
            <h3 className=" text-center indent-[0.1em] text-[1.75rem] font-black leading-tight tracking-widest">
              CHECK OUT OUR
              <br />
              YOUTUBE CHANNEL!
            </h3>

            <div className="not-subtle-shadow relative z-20 mx-auto w-3/4 p-4 transition-transform hover:scale-[1.01]">
              <div className="vignette">
                <img src="/images/youtube_outro_image.png" alt="MAF Video Outro Image" />
              </div>
            </div>

            <p className=" text-balance px-8 text-center font-sans font-light">
              New videos every week, listen to MAF on the go!
              <br />
              Subscribe to our channel to get notified when we post new videos.
            </p>
          </div>

          <Button
            href="https://youtube.com/@MildlyAggressiveFolk"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto"
          >
            Visit Youtube Channel
          </Button>
        </article>
      </section>
    </section>
  );
}
