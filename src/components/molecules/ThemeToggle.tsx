import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";
import type { Theme } from "@/hooks/useTheme";
import Button from "../atoms/Button";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation();
  const isDark = theme === "dark";
  const Icon = isDark ? FiSun : FiMoon;

  return (
    <Button
      variant="rail"
      label={isDark ? t("theme.toLight") : t("theme.toDark")}
      onClick={onToggle}
    >
      <Icon aria-hidden="true" className="size-4.5" />
    </Button>
  );
}
