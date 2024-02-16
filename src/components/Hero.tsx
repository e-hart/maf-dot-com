import { useMemo } from "react";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

export default function Hero() {
  const { isIntersecting, ref } = useIntersectionObserver({ rootMargin: "-30%" });
  const style = useMemo(() => {
    if (isIntersecting) {
      return { opacity: "1", transition: "all 0.5s" };
    } else {
      return { opacity: "0", transition: "all 0.5s" };
    }
  }, [isIntersecting]);

  const scrollToFeatured = () => {
    document.getElementById("maf")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      style={{ transition: "all 0.5s" }}
      className="relative flex h-[92vh] select-none flex-col items-center justify-center pt-[40vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          ref={ref}
          style={{ ...style, letterSpacing: "0.075em" }}
          className={`text-shadow font-[spacing:_1rem] text-center text-[3rem] font-black uppercase leading-none sm:text-[5rem]`}
        >
          Mildly
          <br />
          Aggressive
          <br />
          Folk
        </h1>
        <br />
        <p style={{ ...style }} className="my-4 text-center text-xl font-thin italic">
          Atlanta based Twitch-streaming string duo
        </p>
        <br />
        <div
          style={{ ...style }}
          className="z-20 m-2 h-fit w-fit rounded-full border-2 border-white p-4 text-[24px] transition-colors hover:border-[#33aaff] hover:text-[#33aaff]"
        >
          <DownArrow onClick={scrollToFeatured} />
        </div>
        <div
          id="maf"
          className="absolute bottom-20 z-10 select-none border-[5px] border-white px-6 py-2 text-center text-[2.5rem] font-black"
          style={{ opacity: isIntersecting ? "0" : "1", transition: "all 0.5s" }}
        >
          <h1 style={{ letterSpacing: ".125em" }}>MAF</h1>
        </div>
      </div>
    </div>
  );
}

interface DownArrowProps extends React.SVGProps<SVGSVGElement> {}

function DownArrow(props: DownArrowProps) {
  return (
    <svg
      className="h-6 w-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19V5m0 14-4-4m4 4 4-4"
      />
    </svg>
  );
}
