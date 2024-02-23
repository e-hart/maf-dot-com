/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 100,
  semi: true,
  tailwindConfig: "./tailwind.config.ts",
};

module.exports = config;
