import Image from "next/image";
import Button from "./Button";
import HybridLink from "./HybridLink";

export default function FeaturedSection({
  href,
  newWindow,
  imgSrc,
  imgAlt,
  headline,
  buttonText,
  description,
}: {
  href: string;
  newWindow?: boolean;
  imgSrc: string;
  imgAlt: string;
  headline: string | JSX.Element;
  buttonText: string | JSX.Element;
  description: string | JSX.Element;
}) {
  return (
    <article className="flex flex-col items-center gap-20 pb-20 pt-4">
      <h1 className="text-center text-[4rem] font-black uppercase tracking-widest">{headline}</h1>

      <HybridLink
        href={href}
        newWindow={newWindow}
        className="relative z-20 mx-auto w-11/12 p-4 shadow-heavy transition-transform hover:scale-[1.01]"
      >
        <div className="vignette">
          <Image src={imgSrc} alt={imgAlt} width={1280} height={720} />
        </div>
      </HybridLink>

      <p className="mx-8 text-center font-sans font-extralight leading-none">{description}</p>

      <Button href={href}>{buttonText}</Button>
    </article>
  );
}
