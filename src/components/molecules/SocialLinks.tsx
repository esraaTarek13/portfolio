import { socials } from "@/config/socials";
import SocialLink from "../atoms/SocialLink";

export default function SocialLinks() {
  return (
    <div className="mt-7.5 flex gap-2.5 md:gap-4">
      {socials.map(({ id, href, label, icon }) => (
        <SocialLink key={id} href={href} label={label} Icon={icon} />
      ))}
    </div>
  );
}
