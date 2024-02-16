import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitchLogo,
  YouTubeLogo,
} from "~/components/Logos";

export function Navbar() {
  const [pathname, setPathname] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    if (w < 1280) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function handleResize() {
      if (window.innerWidth < 1280) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  if (!isMobile)
    return (
      <nav
        id="nav"
        className="z-0 flex w-full justify-between bg-[#ffffff2e] shadow-[0_0_10px_0_#0008]"
      >
        <ul className="flex">
          <style jsx>{`
            ul {
              display: flex;
              width: 100%;
              text-transform: uppercase;
              font-weight: 900;
              font-size: 0.8rem;
              letter-spacing: 0.075em;
              align-items: center;

              li {
                padding: 1.5rem 2rem;
                transition: background 0.5s;

                &[data-active="false"]:hover {
                  background: #fff4;
                }
              }

              & [data-active="true"] {
                background: #fff;
                color: #1e252d;
              }
            }
          `}</style>
          <li data-active={pathname === "/"}>
            <Link href="/">Home</Link>
          </li>
          <li data-active={pathname === "/stream"}>
            <Link href="/stream">The Stream</Link>
          </li>
          <li data-active={pathname === "/shop"}>
            <Link href="/shop">The (Handmade) Merch</Link>
          </li>
          <li data-active={pathname === "/videos"}>
            <Link href="/videos">Videos</Link>
          </li>
          <li data-active={pathname === "/booking"}>
            <Link href="/booking">Booking</Link>
          </li>
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
          className="letter-spacing fixed right-8 top-4 z-50 bg-white p-2 text-sm font-black uppercase text-[#1e252d] shadow-[0_0_5px_1px_#0007] transition-colors hover:text-[#18bfef]"
        >
          Menu
        </button>
        <nav
          id="nav"
          style={{ transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)" }}
          className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col justify-center gap-12 bg-white shadow-[0_0_10px_0_#0008] transition-transform"
        >
          <ArrowRightIcon
            className="absolute left-4 top-4 h-6 w-6 cursor-pointer text-[#1e252d] transition-colors hover:text-[#18bfef]"
            onClick={handleDrawerClose}
          />
          <ul className="mt-20 flex flex-col gap-8">
            <style jsx>{`
              ul {
                display: flex;
                width: 100%;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 0.8rem;
                letter-spacing: 0.075em;
                align-items: center;
                color: #1e252d;

                li {
                  transition: background 0.5s;

                  &[data-active="false"]:hover {
                    background: #fff4;
                  }
                }

                & [data-active="true"] {
                  background: #fff;
                  color: #1e252d;
                }
              }
            `}</style>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/"}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/stream"}
            >
              <Link href="/stream">The Stream</Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/shop"}
            >
              <Link href="/shop">The (Handmade) Merch</Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/videos"}
            >
              <Link href="/videos">Videos</Link>
            </li>
            <li
              className="border-[#1e252d] transition-colors hover:text-[#18bfef] data-[active=true]:border-b  "
              data-active={pathname === "/booking"}
            >
              <Link href="/booking">Booking</Link>
            </li>
          </ul>
          <ul className=" flex items-center justify-center text-[#1e252d]">
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
      </>
    );
}
