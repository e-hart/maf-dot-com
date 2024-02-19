import Link, { LinkProps } from "next/link";

type IsomorphicLinkProps = {
  href: string;
  className?: string;
  newWindow?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function IsomorphicLink({
  href,
  newWindow,
  className,
  children,
  ...props
}: IsomorphicLinkProps) {
  const TagType = href.startsWith("/") ? Link : "a";

  const target = newWindow ? "_blank" : props.target;
  const rel = newWindow ? "noopener noreferrer" : props.rel;

  return (
    <TagType href={href} {...props} target={target} rel={rel} className={className}>
      {children}
    </TagType>
  );
}
