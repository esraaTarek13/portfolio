import { useTranslation } from "react-i18next";
import { contactItems } from "@/config/contact";
import InfoRow from "../molecules/InfoRow";

const linkClass =
  "transition-colors duration-(--dur-s) ease-brand hover:text-accent text-sm md:text-base";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <dl className="space-y-6">
      {contactItems.map(({ key, value, href, ltr, links }) => (
        <InfoRow key={key} label={t(`contact.info.${key}`)}>
          {links ? (
            <ul className="flex flex-wrap gap-x-2">
              {links.map((link, index) => (
                <li key={link.label} className="flex gap-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                    <span className="sr-only">{t("work.panel.newTab")}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : href ? (
            <a href={href} dir={ltr ? "ltr" : undefined} className={linkClass}>
              {value}
            </a>
          ) : (
            (value ?? (
              <span className="transition-colors duration-(--dur-s) ease-brand">
                {t(`contact.info.${key}Value`)}
              </span>
            ))
          )}
        </InfoRow>
      ))}
    </dl>
  );
}
