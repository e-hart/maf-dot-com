/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 100,
  semi: true,
};

module.exports = config;
