import Button from "~/components/Button";
import PageTemplate from "~/components/Layout/PageTemplate";

export default function Videos() {
  return (
    <PageTemplate
      headline={
        <>
          New videos on <br /> YouTube every <br /> week!
        </>
      }
      description={
        <>
          Videos are released every Monday. Subscribe to our YouTube for notifications!
          <br />
          (It really does help us A LOT!!!)
        </>
      }
      buttonText="MAF's YouTube Channel"
      imgSrc="/images/youtube_outro_image.png"
      imgAlt="MAF's YouTube outro"
      vignette
      href="https://youtube.com/@mildlyaggressivefolk"
    />
  );
}
