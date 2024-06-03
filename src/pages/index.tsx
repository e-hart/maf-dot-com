import Head from "next/head";
import FeaturedSection from "~/components/FeaturedSection";
import SmallFeaturedSection from "~/components/SmallFeaturedSection";

const links = [
  {
    href: "https://youtube.com/@MildlyAggressiveFolk",
    newWindow: true,
    imgSrc: "/images/youtube_outro_image.png",
    imgAlt: "MAF Video Outro",
    headline: (
      <>
        Subscribe to our <br /> YouTube Channel!
      </>
    ),
    buttonText: "Visit Youtube",
    description: (
      <>
        New videos every week!
        <br />
        Subscribe for notifications when new videos are posted
      </>
    ),
  },
  {
    href: "https://twitch.tv/MildlyAggressiveFolk",
    newWindow: true,
    imgSrc: "/images/stream.png",
    imgAlt: "MAF performing on stream",
    headline: (
      <>
        Watch us live <br /> on Twitch!
      </>
    ),
    buttonText: "Visit Twitch",
    description: (
      <>
        MAF streams live every week!
        <br />
        Follow to be notified when MAF goes live
      </>
    ),
  },
];

const ftdDescription = (
  <>
    The new Honey Bear Handmade crossbody bag, available in many styles (including Rifle Paper Co.)!
    <br />
    <br />
    Check out the shop for the crossbody and other Stephanie-made merch.
  </>
);

export default function Home() {
  return (
    <div id="featured" className="flex flex-col items-center">
      <FeaturedSection
        href="/shop"
        imgSrc="/images/crossbody.jpg"
        imgAlt="crossbody bags"
        headline="New Merch!"
        buttonText="Shop Now"
        description={ftdDescription}
      />

      <section id="links" className="flex w-full flex-wrap sm:flex-nowrap sm:divide-x">
        {links.map((link, i) => (
          <SmallFeaturedSection key={i} {...link} />
        ))}
      </section>
    </div>
  );
}
