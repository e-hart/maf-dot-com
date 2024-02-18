import { socialLinks } from "./Nav";

export default function SocialFooter() {
  return (
    <div className="flex min-h-32 w-full items-center gap-4 border-b-2 border-neutral-300 bg-neutral-100 pl-16 text-[.9rem]">
      <h3 className=" font-black uppercase text-neutral-500">Social</h3>
      <ul className="mr-4 flex items-center gap-2 text-neutral-500">
        {socialLinks.map((link) => (
          <li
            key={link.name}
            className="rounded-full border border-neutral-400 p-2 transition-colors hover:border-[#18bfef] hover:text-[#18bfef] sm:p-3"
          >
            <a href={link.href}>
              <link.Logo className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
