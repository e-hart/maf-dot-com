import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212931",
        highlight: "#33aaff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-gradient": "radial-gradient(circle at center, #0006 25%, transparent 50%)",
        "footer-gradient-mobile": "radial-gradient(circle at center, #0006 50%, transparent 75%)",
      },
      keyframes: {
        "in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "in-from-bottom": "in-from-bottom 1s ease-out",
        "fade-in": "fade-in 2s ease-out",
      },
      boxShadow: {
        heavy: "0 0 1rem 0 rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [
    plugin(
      function ({ addUtilities, matchUtilities, theme }) {
        addUtilities({
          ".vignette": {
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.4))",
            },
          },
          ".bg-wrapper": {
            position: "fixed",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            background:
              "linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.12)), url(/images/maf_couch.jpg), url(/images/bg.jpg)",
            backgroundPosition: "center, top, center",
            backgroundSize: "cover, contain, cover",
            backgroundRepeat: "no-repeat",
            zIndex: "0",
            "@media (min-width: 1280px)": {
              backgroundSize: "cover, 90%, cover",
              backgroundPosition: "center",
            },
          },
          ".text-balance": {
            textWrap: "balance",
          },
        }),
          matchUtilities(
            {
              "text-shadow": (value: string) => ({
                textShadow: `0 0 ${value}rem rgba(0,0,0,0.5)`,
              }),
            },
            {
              values: theme("textShadowSize"),
            },
          );
      },
      {
        theme: {
          textShadowSize: {
            sm: 0.1,
            md: 0.5,
            lg: 1,
            xl: 2,
          },
        },
      },
    ),
  ],
};
export default config;
