import { useTranslation } from "react-i18next";
import TitleBlock from "../molecules/TitleBlock";
import Paragraph from "../atoms/Paragraph";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" aria-labelledby="contact-title">
      <TitleBlock
        wrapper="header"
        id="contact-title"
        badge={t("contact.eyebrow")}
        title={t("contact.title")}
        className="mb-2"
        badgeClassName="mb-3"
      />
      <Paragraph className="mb-8.5">{t("contact.intro")}</Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
