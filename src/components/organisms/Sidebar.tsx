import type { Theme } from "@/hooks/useTheme";
import LanguageToggle from "../molecules/LanguageToggle";
import ThemeToggle from "../molecules/ThemeToggle";
import BrandLink from "../molecules/BrandLink";
import { useTranslation } from "react-i18next";
import NavItem from "../atoms/NavItem";
import { sections } from "@/config/sections";
import type { MouseEvent } from "react";

interface SidebarProps {
    theme: Theme;
    onToggleTheme: () => void;
    onNavigate: (event: MouseEvent<HTMLElement>, to: string) => void;
}

export default function Sidebar({
    theme,
    onToggleTheme,
    onNavigate,
}: SidebarProps) {
    const { t } = useTranslation();

    return (
        <aside className="fixed inset-s-0 top-0 bottom-0 z-40 flex px-0.5 md:w-(--rail-w) flex-col items-center justify-between border-e border-line bg-elev py-5.5 transition-colors duration-(--dur-m) ease-brand">
            <div className="space-y-3">
                <BrandLink
                    label={t("nav.home")}
                    onClick={(event) => onNavigate(event, "/")}
                />

                <nav
                    aria-label={t("nav.label")}
                    className="flex flex-col items-center gap-1 md:gap-3"
                >
                    {sections.map(({ id, path, icon }) => (
                        <NavItem
                            key={id}
                            to={path}
                            label={t(`nav.${id}`)}
                            icon={icon}
                            onClick={(event) => onNavigate(event, path)}
                        />
                    ))}
                </nav>
            </div>
            <div className="space-y-2.5 md:space-y-4">
                <LanguageToggle />
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
        </aside>
    );
}
