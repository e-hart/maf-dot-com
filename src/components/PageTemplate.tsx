import Head from "next/head";
import Button from "./Button";
import { useRouter } from "next/router";

export default function PageTemplate({
  headline,
  description,
  buttonText,
  imgSrc,
  imgAlt,
  href,
  vignette,
}: {
  headline: string | JSX.Element;
  description: string | JSX.Element;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  vignette?: boolean;
}) {
  const pathname = useRouter().pathname;
  const formattedPathname = ` | ${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}`;

  return (
    <div className="flex flex-col items-center gap-20 sm:p-4">
      <Head>
        <title>{`Mildly Aggressive Folk${formattedPathname}`}</title>
      </Head>
      <h1 className="mx-2 text-center text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
        {headline}
      </h1>

      <p className="mx-12 text-center font-sans font-extralight leading-relaxed">{description}</p>

      <Button href={href} rel="noopener noreferrer" target="_blank">
        {buttonText}
      </Button>

      <div className="relative z-20 mx-auto w-3/4 p-4 shadow-heavy transition-transform hover:scale-[1.01]">
        <a href={href} rel="noopener noreferrer" target="_blank">
          <div className={vignette ? "vignette" : ""}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </a>
      </div>
    </div>
  );
}
