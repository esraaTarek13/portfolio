import { useTranslation } from "react-i18next";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import FeatureCard from "../molecules/FeatureCard";
import { aboutFeatures } from "@/config/aboutFeatures";
import SectionHeader from "../molecules/SectionHeader";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex flex-col gap-10 md:flex-row items-center md:items-start lg:gap-15"
    >
      <div className="aspect-4/5 h-[50%] w-35 md:w-50 lg:w-70 max-w-60 shrink-0 overflow-hidden rounded-lg md:sticky md:top-20">
        <Image
          variant="photo"
          src="/images/profile.jpeg"
          alt={t("about.photoAlt")}
          width={480}
          height={600}
          loading="lazy"
        />
      </div>

      <div className="flex-1">
        <SectionHeader
          id="about-title"
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
        />
        <Paragraph className="mb-3.5">{t("about.intro")}</Paragraph>
        <Paragraph className="mb-6.5">{t("about.experience")}</Paragraph>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutFeatures.map(({ key, icon: Icon }) => (
            <FeatureCard
              key={key}
              icon={<Icon aria-hidden="true" className="size-5" />}
              title={t(`about.features.${key}.title`)}
              description={t(`about.features.${key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
