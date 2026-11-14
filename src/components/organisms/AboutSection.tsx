import { useTranslation } from "react-i18next";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import FeatureCard from "../molecules/FeatureCard";
import TitleBlock from "../molecules/TitleBlock";
import { aboutFeatures } from "@/config/aboutFeatures";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex flex-col items-center gap-10 md:flex-row md:items-start lg:gap-15"
    >
      <div className="aspect-4/5 w-35 max-w-60 shrink-0 overflow-hidden rounded-lg md:sticky md:top-20 md:w-50 lg:w-70">
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
        <TitleBlock
          wrapper="header"
          id="about-title"
          badge={t("about.eyebrow")}
          title={t("about.title")}
          className="mb-4.5"
          badgeClassName="mb-3"
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
