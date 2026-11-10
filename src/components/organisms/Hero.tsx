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
      <Badge variant="muted">{t("hero.badge")}</Badge>

      <Heading as="h1" variant="display">
        {t("hero.name")}
        <span className="block italic text-accent font-normal ltr:font-sans ">{t("hero.tagline")}</span>
      </Heading>

      <div className="mb-4">
        <Paragraph variant="lead">{t("hero.description")}</Paragraph>
      </div>

      <HeroActions />
      <SocialLinks />
    </section>
  );
}
