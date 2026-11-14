import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";
import { cn } from "@/lib/cn";

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const nextLanguage = i18n.language.startsWith("ar") ? "en" : "ar";

  return (
    <Button
      variant="rail"
      label={t("language.switch")}
      onClick={() => void i18n.changeLanguage(nextLanguage)}
      className={cn(
        "text-xs font-semibold md:text-sm",
        nextLanguage === "ar" ? "font-arabic" : "font-mono",
      )}
    >
      <span lang={nextLanguage}>{t("language.short")}</span>
    </Button>
  );
}
