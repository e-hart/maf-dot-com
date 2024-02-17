import { useEffect, useState } from "react";

export default function useIsMobile() {
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
  return isMobile;
}
