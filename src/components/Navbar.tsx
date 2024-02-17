import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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

export function Navbar() {
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

  const liStyle = { transition: "background 0.5s" };

  if (!isMobile)
    return (
      <nav
        id="nav"
        className="z-0 flex w-full justify-between bg-[#ffffff2e] shadow-[0_0_10px_0_#0008]"
      >
        <ul className=" flex w-full items-center indent-[0.075em] text-[.8rem] font-black uppercase tracking-[0.075em] data-[active=true]:text-[#1e252d] [&_li[data-active=true]]:bg-white [&_li[data-active=true]]:text-[#1e252d] [&_li]:px-8 [&_li]:py-6 [&_li]:hover:data-[active=false]:bg-[#fff4]">
          <Link href="/">
            <li style={liStyle} data-active={pathname === "/"}>
              Home
            </li>
          </Link>
          <Link href="/stream">
            <li style={liStyle} data-active={pathname === "/stream"}>
              The Stream
            </li>
          </Link>
          <Link href="/shop">
            <li style={liStyle} data-active={pathname === "/shop"}>
              The (Handmade) Merch
            </li>
          </Link>
          <Link href="/videos">
            <li style={liStyle} data-active={pathname === "/videos"}>
              Videos
            </li>
          </Link>
          <Link href="/booking">
            <li style={liStyle} data-active={pathname === "/booking"}>
              Booking
            </li>
          </Link>
        </ul>
        <ul className="mr-4 flex items-center">
          <li className="mx-2 transition-colors hover:text-[#18bfef]">
            <a href="https://twitch.tv/mildlyaggressivefolk">
              <TwitchLogo className="h-6 w-6 p-1" />
            </a>
          </li>
          <li className="mx-2 transition-colors hover:text-[#18bfef]">
            <a href="https://www.youtube.com/@mildlyaggressivefolk">
              <YouTubeLogo />
            </a>
          </li>
          <li className="mx-2 transition-colors hover:text-[#18bfef]">
            <a href="https://discord.gg/mgZzerpuQe">
              <DiscordLogo />
            </a>
          </li>
          <li className="mx-2 transition-colors hover:text-[#18bfef]">
            <a href="https://instagram.com/mildlyaggressivefolk">
              <InstagramLogo />
            </a>
          </li>
          <li className="mx-2 transition-colors hover:text-[#18bfef]">
            <a href="https://www.facebook.com/mildlyaggressivefolk">
              <FacebookLogo />
            </a>
          </li>
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
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/"}
            >
              <Link href="/" onClick={handleDrawerClose}>
                Home
              </Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/stream"}
            >
              <Link href="/stream" onClick={handleDrawerClose}>
                The Stream
              </Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/shop"}
            >
              <Link href="/shop" onClick={handleDrawerClose}>
                The (Handmade) Merch
              </Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/videos"}
            >
              <Link href="/videos" onClick={handleDrawerClose}>
                Videos
              </Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/booking"}
            >
              <Link href="/booking" onClick={handleDrawerClose}>
                Booking
              </Link>
            </li>
          </ul>
          <ul className=" flex items-center justify-center text-[#1e252d]">
            <li className="mx-2 transition-colors hover:text-[#18bfef]">
              <a href="https://twitch.tv/mildlyaggressivefolk" onClick={handleDrawerClose}>
                <TwitchLogo className="h-6 w-6 p-1" />
              </a>
            </li>
            <li className="mx-2 transition-colors hover:text-[#18bfef]">
              <a href="https://www.youtube.com/@mildlyaggressivefolk" onClick={handleDrawerClose}>
                <YouTubeLogo />
              </a>
            </li>
            <li className="mx-2 transition-colors hover:text-[#18bfef]">
              <a href="https://discord.gg/mgZzerpuQe" onClick={handleDrawerClose}>
                <DiscordLogo />
              </a>
            </li>
            <li className="mx-2 transition-colors hover:text-[#18bfef]">
              <a href="https://instagram.com/mildlyaggressivefolk" onClick={handleDrawerClose}>
                <InstagramLogo />
              </a>
            </li>
            <li className="mx-2 transition-colors hover:text-[#18bfef]">
              <a href="https://www.facebook.com/mildlyaggressivefolk" onClick={handleDrawerClose}>
                <FacebookLogo />
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
}
