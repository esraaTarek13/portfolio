import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";
import RailButton from "@/components/atoms/RailButton";
import type { Theme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation();
  const Icon = theme === "dark" ? FiSun : FiMoon;

  return (
    <RailButton
      onClick={onToggle}
      aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
    >
      <Icon aria-hidden="true" className="size-4.5" />
    </RailButton>
  );
}
