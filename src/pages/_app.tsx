import "~/styles/globals.css";
import type { AppProps } from "next/app";

import styles from "~/styles/styles.module.css";
import { useEffect, useRef, useState } from "react";

import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

import { createContext } from "react";

export const PortalRefContext = createContext<HTMLDivElement | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const portalRef = useRef<HTMLDivElement>();

  const setPortalRef = (ref: HTMLDivElement) => {
    portalRef.current = ref;
  };

  return (
    <>
      <div
        className={`relative h-screen w-screen overflow-x-clip overflow-y-scroll ${sourceSans3.className}`}
      >
        <div className={styles.bg} />
        <Component {...pageProps} />
      </div>
    </>
  );
}
