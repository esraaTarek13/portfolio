import { useTranslation } from "react-i18next";
import LinkButton from "../atoms/LinkButton";

export default function HeroActions() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-wrap gap-3">
      <LinkButton to="/work">{t("hero.cta.work")}</LinkButton>
      <LinkButton variant="outline" to="/contact">
        {t("hero.cta.project")}
      </LinkButton>
    </div>
  );
}
