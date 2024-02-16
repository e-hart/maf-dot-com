export default function EmailFooter() {
  return (
    <div className="flex min-h-32 w-full items-center gap-4 border-b-2 border-neutral-300 bg-neutral-100 pl-16 text-[.9rem]">
      <h3 className=" font-black uppercase text-neutral-500">Email</h3>
      <a
        href="mailto:mildlyaggressivefolk@gmail.com"
        className="border-b border-dotted border-neutral-500 font-sans font-thin transition-colors hover:border-[#33aaff] hover:text-[#33aaff]"
      >
        mildlyaggressivefolk@gmail.com
      </a>
    </div>
  );
}
