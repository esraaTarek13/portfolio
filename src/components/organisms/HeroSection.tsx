import { useTranslation } from "react-i18next";
import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import HeroActions from "../molecules/HeroActions";
import SocialLinks from "../molecules/SocialLinks";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="flex flex-col items-start gap-7"
    >
      <div className="flex items-center justify-center rounded-full border border-muted/20 px-3 py-1 md:px-4">
        <Badge variant="muted">{t("hero.badge")}</Badge>
      </div>

      <Heading as="h1" variant="display" id="hero-title" className="rtl:pt-3">
        <span className="text-text transition-colors duration-(--dur-l)">
          {t("hero.greeting")}{" "}
        </span>
        {t("hero.name")}
      </Heading>

      <div className="mb-2 space-y-1.5">
        <Paragraph variant="lead" className="font-bold text-accent">
          {t("hero.jobTitle")}
        </Paragraph>
        <Paragraph variant="lead">{t("hero.description")}</Paragraph>
      </div>

      <HeroActions />
      <SocialLinks />
    </section>
  );
}
