import Link, { LinkProps } from "next/link";

type HybridLinkProps = {
  href: string;
  className?: string;
  newWindow?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function HybridLink({ href, newWindow, children, ...props }: HybridLinkProps) {
  if (href.startsWith("/"))
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  else {
    const target = newWindow ? "_blank" : props.target;
    const rel = newWindow ? "noopener noreferrer" : props.rel;

    return (
      <a href={href} {...props} target={target} rel={rel}>
        {children}
      </a>
    );
  }
}
