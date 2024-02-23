import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import {
  ArrowRightIcon,
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitchLogo,
  YouTubeLogo,
} from "~/components/layout/Logos";

import useIsMobile from "~/hooks/useIsMobile";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";

const routes = [
  { name: "Home", path: "/" },
  { name: "The Stream", path: "/stream" },
  {
    name: (
      <span className="flex">
        The&nbsp;
        <div className="origin-center transition-transform group-hover:scale-110">
          (Handmade)&nbsp;
        </div>
        Merch
      </span>
    ),
    path: "/shop",
  },
  { name: "Videos", path: "/videos" },
  { name: "Booking", path: "/booking" },
];

export const socialLinks = [
  { name: "Twitch", href: "https://twitch.tv/mildlyaggressivefolk", Logo: TwitchLogo },
  { name: "YouTube", href: "https://www.youtube.com/@mildlyaggressivefolk", Logo: YouTubeLogo },
  { name: "Discord", href: "https://discord.gg/mgZzerpuQe", Logo: DiscordLogo },
  { name: "Instagram", href: "https://instagram.com/mildlyaggressivefolk", Logo: InstagramLogo },
  { name: "Facebook", href: "https://www.facebook.com/mildlyaggressivefolk", Logo: FacebookLogo },
];

export function Nav() {
  const pathname = useRouter().pathname;
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handleDrawerClose, "mousedown");

  function handleDrawerOpen() {
    setIsDrawerOpen(true);
  }
  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  if (!isMobile)
    return (
      <nav
        id="nav"
        className="z-30 flex w-full justify-between bg-[#ffffff2e] shadow-[0_-10px_15px_-10px_#0008aaa] "
      >
        <ul className=" flex w-full select-none items-center text-center indent-[0.075em] text-[.8rem] font-black uppercase tracking-[0.075em] [&_li[data-active=true]]:bg-white [&_li[data-active=true]]:text-primary">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <li
                className="group px-8 py-6 transition data-[active=true]:shadow-[-20px_-3px_20px_-20px_#0006,20px_-3px_20px_-20px_#0006] hover:data-[active=false]:scale-105 hover:data-[active=false]:bg-[linear-gradient(to_right,transparent_0%,#fff1_12%,#fff1_88%,transparent_100%)]"
                data-active={pathname === route.path}
              >
                {route.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="mr-4 flex items-center">
          {socialLinks.map((link) => (
            <li key={link.name} className="mx-2 transition-colors hover:text-highlight">
              <a href={link.href}>
                <link.Logo />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );

  if (isMobile)
    return (
      <>
        <button
          onClick={handleDrawerOpen}
          className="animate-fade-in fixed right-4 top-4 z-50 bg-white p-2 indent-[0.1em] text-sm font-black uppercase tracking-widest text-primary shadow-heavy transition-colors hover:text-highlight"
        >
          Menu
        </button>

        <nav
          ref={ref}
          id="nav"
          style={{ transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)" }}
          className="fixed right-0 top-0 z-[100] flex h-full w-64 flex-col justify-center gap-12 bg-white shadow-heavy transition-transform"
        >
          <ArrowRightIcon
            className="absolute bottom-4 left-4 size-6 cursor-pointer text-primary transition-colors hover:text-highlight"
            onClick={handleDrawerClose}
          />
          <ul className="mt-20 flex w-full flex-col items-center gap-8 indent-[0.1em] text-[.8rem] font-black uppercase tracking-widest text-primary">
            {routes.map((route) => (
              <li
                key={route.path}
                className="border-primary transition-colors hover:text-highlight data-[active=true]:border-b"
                data-active={pathname === route.path}
              >
                <Link href={route.path} onClick={handleDrawerClose}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className=" flex items-center justify-center text-primary">
            {socialLinks.map((link) => (
              <li key={link.name} className="mx-2 transition-colors hover:text-highlight">
                <a href={link.href} onClick={handleDrawerClose}>
                  <link.Logo />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
}
