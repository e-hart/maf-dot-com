import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    if (props.href.startsWith("/")) {
      return (
        <Link
          href={props.href}
          className={`mx-8 h-max w-fit justify-self-center text-balance border-2 border-black px-8 py-4 text-center indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <a
        {...props}
        className={`mx-8 h-max w-fit justify-self-center text-balance border-2 border-black px-8 py-4 text-center indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
      >
        {props.children}
      </a>
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
