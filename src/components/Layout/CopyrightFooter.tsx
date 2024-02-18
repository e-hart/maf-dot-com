export default function CopyrightFooter() {
  return (
    <div
      id="copyright"
      className="bg w-full bg-[image:linear-gradient(to_right,_#0000_10%,_#0008_50%,_#0000_90%)] py-12 sm:px-24"
    >
      <ul className="flex flex-wrap items-center justify-around indent-[0.1em] text-sm font-black uppercase tracking-widest text-neutral-200">
        <li className="px-2">&copy; Mildly Aggressive Folk {new Date().getFullYear()}</li>
        <li className="px-2 text-center text-xs">
          Built by{" "}
          <a
            className="text-neutral-400 transition-colors hover:text-[#18bfef]"
            href="https://evanh.art"
          >
            {" "}
            Evan Hart
          </a>
          <br />
          Design inspired by{" "}
          <a
            className="text-neutral-400 transition-colors hover:text-[#18bfef]"
            href="https://html5up.net"
          >
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  );
}
