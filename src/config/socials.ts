import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export interface Social {
    id: string;
    label: string;
    href: string;
    icon: IconType;
}

export const socials: Social[] = [
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/esraa-tarek-frontend/",
        icon: FaLinkedinIn,
    },
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com/esraaTarek13",
        icon: FaGithub,
    },
];