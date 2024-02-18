import Button from "~/components/Button";

export default function Shop() {
  return (
    <section className="flex flex-col items-center gap-20 sm:p-4">
      <h1 className="mx-2 text-center text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
        Check out our <br /> handmade merch!
      </h1>

      <p className="mx-12  text-center font-sans font-extralight leading-tight">
        All merch is made by hand by Stephanie. Check out our inventory of bags, pouches, wallets,
        and more!
      </p>

      <Button
        href="https://etsy.com/shop/honeybearhandmade"
        rel="noopener noreferrer"
        target="_blank"
      >
        Visit the Shop
      </Button>

      <div className="not-subtle-shadow relative z-20 mx-auto w-3/4 p-4 transition-transform hover:scale-[1.01]">
        <a href="https://etsy.com/shop/honeybearhandmade" rel="noopener noreferrer" target="_blank">
          <img src="/images/crossbody.jpg" alt="Handmade merch" />
        </a>
      </div>
    </section>
  );
}
