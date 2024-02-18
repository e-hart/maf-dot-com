import Button from "~/components/Button";

export default function Stream() {
  return (
    <section className="flex flex-col items-center gap-20 sm:p-4">
      <h1 className="mx-2 text-center text-[2.5rem] font-black uppercase leading-tight tracking-widest sm:text-[3rem] xl:text-[4rem]">
        Watch MAF live <br /> on <span className="text-[#6441A4]">Twitch</span>!
      </h1>

      <p className=" mx-12 text-balance text-center font-sans font-extralight leading-relaxed">
        MildlyAggressiveFolk streams live on Twitch.tv multiple times a week.
        <br />
        <br />
        Join our <a href="https://discord.gg/mgZzerpuQe">Discord</a> for the latest updates on when
        we go live!
      </p>

      <Button
        href="https://twitch.tv/MildlyAggressiveFolk"
        rel="noopener noreferrer"
        target="_blank"
      >
        Visit MAF&apos;s Twitch Channel
      </Button>

      <div className="not-subtle-shadow relative z-20 mx-auto w-3/4 p-4 transition-transform hover:scale-[1.01]">
        <a href="https://twitch.tv/MildlyAggressiveFolk" rel="noopener noreferrer" target="_blank">
          <img src="/images/stream.png" alt="MAF stream pic" />
        </a>
      </div>
    </section>
  );
}
