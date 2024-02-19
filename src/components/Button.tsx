import Link from "next/link";
import IsomorphicLink from "./IsomorphicLink";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  newWindow?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <IsomorphicLink
        href={props.href}
        {...props}
        className={`mx-8 h-max w-fit justify-self-center text-balance border-2 border-black px-8 py-4 text-center indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
      >
        {props.children}
      </IsomorphicLink>
    );
  }

  return (
    <button
      {...props}
      className={`mx-8 h-max w-fit justify-self-center text-balance border-2 border-black px-8 py-4 text-center indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
    >
      {props.children}
    </button>
  );
}
