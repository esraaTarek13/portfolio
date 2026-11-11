import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";

export default function HeroActions() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-wrap gap-3">
      <Button to="/work">{t("hero.cta.work")}</Button>
      <Button variant="outline" to="/contact">
        {t("hero.cta.project")}
      </Button>
    </div>
  );
}
