import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    if (props.href.startsWith("http")) {
      return (
        <a
          {...props}
          className={`w-max border-2 border-black px-8 py-4 indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
        >
          {props.children}
        </a>
      );
    }

    if (props.href.startsWith("/")) {
      return (
        <Link
          href={props.href}
          className={`w-max border-2 border-black px-8 py-4 indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <a
        {...props}
        className={`w-max border-2 border-black px-8 py-4 indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <button
      {...props}
      className={`w-max border-2 border-black px-8 py-4 indent-[0.1em] font-black uppercase tracking-widest text-[#212931] transition-colors hover:border-[#2299ff] hover:text-[#2299ff] ${props.className}`}
    >
      {props.children}
    </button>
  );
}
