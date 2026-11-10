import { socials } from "@/config/socials";
import SocialLink from "../atoms/SocialLink";

export default function SocialLinks() {
  return (
    <div className="flex gap-2.5 md:gap-4 mt-7.5">
      {socials.map(({ id, href, label, icon: Icon }) => (
        <SocialLink key={id} href={href} label={label} className="group hover:text-accent">
          <Icon aria-hidden="true" className="size-3.5 md:size-4.5" />
        </SocialLink>
      ))}
    </div>
  );
}
