import { useTranslation } from "react-i18next";
import RailButton from "@/components/atoms/RailButton";
import { cn } from "@/lib/cn";

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const nextLanguage = i18n.language.startsWith("ar") ? "en" : "ar";

  return (
    <RailButton
      onClick={() => void i18n.changeLanguage(nextLanguage)}
      aria-label={t("language.switch")}
      lang={nextLanguage}
      className={cn(
        "text-xs md:text-sm font-semibold",
        nextLanguage === "ar" ? "font-arabic" : "font-mono",
      )}
    >
      {t("language.short")}
    </RailButton>
  );
}
