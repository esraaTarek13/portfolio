import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa6";
import { FiAlertCircle, FiDatabase, FiZap } from "react-icons/fi";

interface AboutFeature {
    key: "cleanCode" | "smartFetching" | "errorHandling" | "performance";
    icon: IconType;
}

export const aboutFeatures: readonly AboutFeature[] = [
    { key: "cleanCode", icon: FaCode },
    { key: "smartFetching", icon: FiDatabase },
    { key: "errorHandling", icon: FiAlertCircle },
    { key: "performance", icon: FiZap },
];