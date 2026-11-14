import type { IconType } from "react-icons";
import { FiAward, FiGrid, FiHome, FiMail, FiUser } from "react-icons/fi";

export type SectionId = "home" | "about" | "resume" | "work" | "contact";

export interface Section {
  id: SectionId;
  path: string;
  icon: IconType;
}

export const sections: readonly Section[] = [
  { id: "home", path: "/", icon: FiHome },
  { id: "about", path: "/about", icon: FiUser },
  { id: "resume", path: "/resume", icon: FiAward },
  { id: "work", path: "/work", icon: FiGrid },
  { id: "contact", path: "/contact", icon: FiMail },
];
