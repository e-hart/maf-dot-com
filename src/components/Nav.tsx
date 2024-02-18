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
} from "~/components/Logos";

import useIsMobile from "~/hooks/useIsMobile";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";

const routes = [
  { name: "Home", path: "/" },
  { name: "The Stream", path: "/stream" },
  { name: "The (Handmade) Merch", path: "/shop" },
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
        className="z-0 flex w-full justify-between bg-[#ffffff2e] shadow-[0_0_10px_0_#0008]"
      >
        <ul className=" flex w-full items-center indent-[0.075em] text-[.8rem] font-black uppercase tracking-[0.075em] data-[active=true]:text-[#1e252d] [&_li[data-active=true]]:bg-white [&_li[data-active=true]]:text-[#1e252d] [&_li]:px-8 [&_li]:py-6 [&_li]:hover:data-[active=false]:bg-[#fff4]">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <li style={{ transition: "background 0.5s" }} data-active={pathname === route.path}>
                {route.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="mr-4 flex items-center">
          {socialLinks.map((link) => (
            <li key={link.name} className="mx-2 transition-colors hover:text-[#18bfef]">
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
          className="fixed right-4 top-4 z-50 bg-white p-2 indent-[0.1em] text-sm font-black uppercase tracking-widest text-[#1e252d] shadow-[0_0_5px_1px_#0007] transition-colors hover:text-[#18bfef]"
        >
          Menu
        </button>

        <nav
          ref={ref}
          id="nav"
          style={{ transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)" }}
          className="fixed right-0 top-0 z-[100] flex h-full w-64 flex-col justify-center gap-12 bg-white shadow-[0_0_10px_0_#0008] transition-transform"
        >
          <ArrowRightIcon
            className="absolute bottom-4 left-4 h-6 w-6 cursor-pointer text-[#1e252d] transition-colors hover:text-[#18bfef]"
            onClick={handleDrawerClose}
          />
          <ul className="mt-20 flex w-full flex-col items-center gap-8 indent-[0.1em] text-[.8rem] font-black uppercase tracking-widest text-[#1e252d]">
            {routes.map((route) => (
              <li
                key={route.path}
                className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
                data-active={pathname === route.path}
              >
                <Link href={route.path} onClick={handleDrawerClose}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className=" flex items-center justify-center text-[#1e252d]">
            {socialLinks.map((link) => (
              <li key={link.name} className="mx-2 transition-colors hover:text-[#18bfef]">
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
