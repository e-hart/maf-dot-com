import Button from "./Button";
import HybridLink from "./HybridLink";
import Image from "next/image";

export default function SmallFeaturedSection({
  href,
  imgSrc,
  imgAlt,
  headline,
  buttonText,
  description,
}: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  headline: string | JSX.Element;
  buttonText: string | JSX.Element;
  description: string | JSX.Element;
}) {
  return (
    <article className="grid grid-rows-[1fr_auto] border-t border-neutral-200 px-4 py-16 text-center sm:basis-1/2">
      <div className="flex flex-col *:my-8">
        <h3 className=" text-center indent-[0.1em] text-[1.75rem] font-black uppercase leading-tight tracking-widest">
          {headline}
        </h3>

        <HybridLink
          href={href}
          newWindow
          className="relative z-20 mx-auto w-3/4 p-4 shadow-heavy transition-transform hover:scale-[1.01]"
        >
          <div className="vignette">
            <Image src={imgSrc} alt={imgAlt} width={800} height={450} />
          </div>
        </HybridLink>

        <p className="text-balance px-8 text-center font-sans font-light">{description}</p>

        <Button href={href} newWindow className="mx-auto">
          {buttonText}
        </Button>
      </div>
    </article>
  );
}
