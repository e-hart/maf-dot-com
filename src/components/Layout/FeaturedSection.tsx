import Link from "next/link";
import Button from "../Button";
import IsomorphicLink from "../IsomorphicLink";

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

      <IsomorphicLink
        href={href}
        newWindow={newWindow}
        className="not-subtle-shadow relative z-20 mx-auto w-11/12 p-4 transition-transform hover:scale-[1.01]"
      >
        <div className="vignette">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </IsomorphicLink>

      <p className="mx-8 text-center font-sans font-extralight leading-none">{description}</p>

      <Button href={href}>{buttonText}</Button>
    </article>
  );
}
