import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects, type ProjectKey } from "@/config/projects";
import ProjectCard from "../molecules/ProjectCard";
import SectionHeader from "../molecules/SectionHeader";
import ProjectPanel from "./ProjectPanel";

export default function WorkSection() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<ProjectKey | null>(null);
  const activeProject = projects.find(({ key }) => key === activeKey) ?? null;

  return (
    <section id="work" aria-labelledby="work-title" className="space-y-7.5">
      <SectionHeader
        id="work-title"
        eyebrow={t("work.eyebrow")}
        title={t("work.title")}
      />
      <ul className="grid gap-5.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
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
