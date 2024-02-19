import Button from "../Button";

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
  return (
    <section className="flex flex-col items-center gap-20 sm:p-4">
      <h1 className="mx-2 text-center text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
        {headline}
      </h1>

      <p className="mx-12 text-center font-sans font-extralight leading-relaxed">{description}</p>

      <Button href={href} rel="noopener noreferrer" target="_blank">
        {buttonText}
      </Button>

      <div className="not-subtle-shadow relative z-20 mx-auto w-3/4 p-4 transition-transform hover:scale-[1.01]">
        <a href={href} rel="noopener noreferrer" target="_blank">
          <div className={vignette ? "vignette" : ""}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </a>
      </div>
    </section>
  );
}
