import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects, type ProjectKey } from "@/config/projects";
import TitleBlock from "../molecules/TitleBlock";
import ProjectCard from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";

export default function WorkSection() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<ProjectKey | null>(null);
  const activeProject = projects.find(({ key }) => key === activeKey) ?? null;

  return (
    <section id="work" aria-labelledby="work-title">
      <TitleBlock
        wrapper="header"
        id="work-title"
        badge={t("work.eyebrow")}
        title={t("work.title")}
        className="mb-10 md:mb-12"
        badgeClassName="mb-3"
      />

      <ul className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ key, category, image }) => (
          <li key={key}>
            <ProjectCard
              name={t(`work.projects.${key}.name`)}
              category={t(`work.categories.${category}`)}
              image={image}
              alt={t(`work.projects.${key}.alt`)}
              onSelect={() => setActiveKey(key)}
            />
          </li>
        ))}
      </ul>

      <ProjectPanel
        project={activeProject}
        onClose={() => setActiveKey(null)}
      />
    </section>
  );
}
