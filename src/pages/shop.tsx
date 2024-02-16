import Button from "~/components/Button";

export default function Shop() {
  return (
    <>
      <section id="featured" className="flex flex-col items-center pt-16">
        <article className="flex flex-col items-center border-b border-neutral-200">
          <h1 className="letter-spacing mx-2 text-center text-[2.5rem] font-black uppercase leading-tight sm:text-[3rem] xl:text-[4rem]">
            Check out our <br /> handmade merch!
          </h1>
          <p className="mx-12 mt-20 text-center font-sans font-extralight leading-tight">
            All merch is made by hand by Stephanie. Check out our inventory of bags, pouches,
            wallets, and more!
          </p>
          <Button
            href="https://etsy.com/shop/honeybearhandmade"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-20"
          >
            Visit the Shop
          </Button>
          <div className="not-subtle-shadow relative z-20 mx-auto my-16 w-3/4 p-4 transition-transform hover:scale-[1.01]">
            <a
              href="https://etsy.com/shop/honeybearhandmade"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/crossbody.jpg" alt="Handmade merch" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
