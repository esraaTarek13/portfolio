import { useTranslation } from "react-i18next";
import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import HeroActions from "../molecules/HeroActions";
import SocialLinks from "../molecules/SocialLinks";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-start gap-7">
      <div className="flex justify-center items-center border border-muted/20 rounded-full px-3 md:px-4 py-1">
        <Badge variant="muted">{t("hero.badge")}</Badge>
      </div>

      <Heading as="h1" variant="display" className="rtl:pt-3">
        <span className="text-text">{t("hero.greeting")} </span>
        {t("hero.name")}
      </Heading>

      <div className="mb-2 space-y-1.5">
        <Paragraph variant="lead" className="text-accent font-semibold">
          {t("hero.jobTitle")}
        </Paragraph>
        <Paragraph variant="lead">{t("hero.description")}</Paragraph>
      </div>

      <HeroActions />
      <SocialLinks />
    </section>
  );
}
