export default function CopyrightFooter() {
  return (
    <div
      id="copyright"
      className="bg bg-footer-gradient-mobile w-full py-12 sm:bg-footer-gradient sm:px-24 xl:px-64"
    >
      <ul className="flex flex-wrap items-center justify-around text-center indent-[0.1em] text-sm font-black uppercase tracking-widest text-neutral-200 *:px-2 *:transition-colors">
        <li>&copy; Mildly Aggressive Folk {new Date().getFullYear()}</li>

        <li className="text-xs">
          Built by{" "}
          <a className="text-neutral-400 hover:text-highlight" href="https://evanh.art">
            Evan Hart
          </a>
          <br />
          Design inspired by{" "}
          <a className="text-neutral-400 hover:text-highlight" href="https://html5up.net">
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  );
}
