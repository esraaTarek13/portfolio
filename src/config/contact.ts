export const WHATSAPP_NUMBER = "201031611085";

interface ContactLink {
  label: string;
  href: string;
}

interface ContactItem {
  key: "email" | "phone" | "location" | "online";
  value?: string;
  href?: string;
  ltr?: boolean;
  links?: readonly ContactLink[];
}

export const contactItems: readonly ContactItem[] = [
  {
    key: "email",
    value: "dev.esraa13@gmail.com",
    href: "mailto:dev.esraa13@gmail.com",
    ltr: true,
  },
  {
    key: "phone",
    value: "+20 103 161 1085",
    href: `tel:+${WHATSAPP_NUMBER}`,
    ltr: true,
  },
  { key: "location" },
  {
    key: "online",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/esraa-tarek-frontend" },
      { label: "GitHub", href: "https://github.com/esraaTarek13" },
    ],
  },
];