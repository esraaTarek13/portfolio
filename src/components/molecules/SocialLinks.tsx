import { socials } from "@/config/socials";
import ExternalLink from "../atoms/ExternalLink";

export default function SocialLinks() {
  return (
    <ul className="mt-7.5 flex gap-2.5 md:gap-4">
      {socials.map(({ id, href, label, icon }) => (
        <li key={id}>
          <ExternalLink variant="icon" href={href} label={label} Icon={icon} />
        </li>
      ))}
    </ul>
  );
}
