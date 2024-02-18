import Button from "~/components/Button";

export default function Videos() {
  return (
    <section className="flex flex-col items-center border-neutral-200">
      <h1 className="mx-2 text-center indent-[0.1em] text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
        New videos on <br /> YouTube every <br /> week!
      </h1>
      <p className="mx-12 mt-20 text-center font-sans font-extralight leading-tight">
        Videos are released every Monday. Subscribe on YouTube to be notified. (It really does help
        us A LOT!!!)
      </p>
      <Button
        href="https://youtube.com/@mildlyaggressivefolk"
        rel="noopener noreferrer"
        target="_blank"
        className=" mt-20"
      >
        MAF&apos;s YouTube Channel
      </Button>
      <div className="not-subtle-shadow relative z-20 mx-auto my-16 w-3/4 p-4 transition-transform hover:scale-[1.01]">
        <a
          href="https://youtube.com/@mildlyaggressivefolk"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/youtube_outro_image.png" alt="MAF's YouTube outro" />
        </a>
      </div>
    </section>
  );
}
