import PageTemplate from "~/components/Layout/PageTemplate";

export default function Stream() {
  return (
    <PageTemplate
      headline={
        <>
          Watch MAF live <br /> on <span className="text-[#6441A4]">Twitch</span>!
        </>
      }
      description={
        <>
          MildlyAggressiveFolk streams live on Twitch.tv multiple times a week.
          <br />
          <br />
          Join our <a href="https://discord.gg/mgZzerpuQe">Discord</a> for the latest updates on
          when we go live!
        </>
      }
      buttonText="Visit MAF's Twitch Channel"
      imgSrc="/images/stream.png"
      imgAlt="MAF stream pic"
      href="https://twitch.tv/MildlyAggressiveFolk"
    />
  );
}
