import Link from "next/link";

export default function HeaderBadge() {
  return (
    <Link href="/">
      <div className="z-10 mx-auto my-16 w-max select-none border-[5px] border-white px-6 py-2 text-center text-[2.5rem] font-black transition-colors hover:border-highlight hover:text-highlight">
        <h1 className="indent-[.125em] tracking-[.125em]">MAF</h1>
      </div>
    </Link>
  );
}
