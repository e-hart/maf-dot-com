import Button from "~/components/Button";

export default function Booking() {
  return (
    <section id="featured" className="flex flex-col items-center pt-16">
      <article className="flex flex-col items-center border-b border-neutral-200">
        <h1 className="mx-2 text-center indent-[0.1em] text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
          Book MAF for <br /> your event!
        </h1>
        <p className="mx-12 mt-20 text-center font-sans font-extralight leading-tight">
          Mildly Aggressive Folk is available for live performances within
          <br />a 200 mile radius of the greater Atlanta area.
          <br />
          <br />
          In-house sound available, suitable for up to 400 heads.
          <br />
          <br />
          Need help live streaming your event? MAF can help with that too!
          <br />
          Contact us for more information at the link below.
        </p>
        <Button
          href="mailto:mildlyaggressivefolk@gmail.com?subject=Booking%20Inquiry"
          className="mt-20"
        >
          Contact MAF
        </Button>
        <div className="not-subtle-shadow relative z-20 mx-auto my-16 w-3/4 p-4 transition-transform hover:scale-[1.01]">
          <img src="/images/blurryvio.jpg" alt="Event with MAF" />
        </div>
      </article>
    </section>
  );
}
