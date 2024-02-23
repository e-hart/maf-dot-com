import PageTemplate from "~/components/PageTemplate";

export default function Shop() {
  return (
    <PageTemplate
      headline={
        <>
          Check out our <br /> handmade merch!
        </>
      }
      description={
        <>
          All merch is made by hand by Stephanie.
          <br />
          Check out our inventory of bags, pouches, wallets, and more!
        </>
      }
      buttonText="Visit the Shop"
      imgSrc="/images/crossbody.jpg"
      imgAlt="Handmade merch"
      vignette
      href="/shop"
    />
  );
}
