import PageTemplate from "~/components/Layout/PageTemplate";

export default function Booking() {
  return (
    <PageTemplate
      headline={
        <>
          Book MAF for <br /> your event!
        </>
      }
      description={
        <>
          Mildly Aggressive Folk is available for live performances within a <br /> 200 mile radius
          of the greater Atlanta area.
          <br />
          <br />
          PA available, suitable for up to 400.
          <br />
          <br />
          Need help live streaming your event? MAF can help with that too!
          <br />
          Contact us for more information at the link below.
        </>
      }
      buttonText="Contact MAF"
      imgSrc="/images/blurryvio.jpg"
      imgAlt="Event with MAF"
      href="mailto:mildlyaggressivefolk@gmail.com?subject=Booking%20Inquiry"
    />
  );
}
