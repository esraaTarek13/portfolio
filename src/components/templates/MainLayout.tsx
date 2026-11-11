import { Outlet } from "react-router-dom";
import TransitionCircle from "@/components/atoms/TransitionCircle";
import LoadingScreen from "@/components/organisms/LoadingScreen";
import Sidebar from "@/components/organisms/Sidebar";
import useAppReady from "@/hooks/useAppReady";
import usePageTransition from "@/hooks/usePageTransition";
import { useTheme } from "@/hooks/useTheme";
import Cursor from "../molecules/Cursor";

export default function MainLayout() {
  const { theme, toggle } = useTheme();
  const { goTo, circleProps } = usePageTransition();
  const ready = useAppReady();

  return (
    <>
      <div className="min-h-dvh" inert={!ready}>
        <Sidebar theme={theme} onToggleTheme={toggle} onNavigate={goTo} />
        <main className="ps-(--rail-w)">
          <Outlet />
        </main>
        <TransitionCircle {...circleProps} />
      </div>
      <LoadingScreen visible={!ready} />
      <Cursor />
    </>
  );
}
