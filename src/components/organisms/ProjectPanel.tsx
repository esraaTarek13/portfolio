import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiX } from "react-icons/fi";
import type { Project } from "@/config/projects";
import ExternalLink from "../atoms/ExternalLink";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import StackList from "../molecules/StackList";
import TitleBlock from "../molecules/TitleBlock";
import Button from "../atoms/Button";

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
}

const TITLE_ID = "project-panel-title";

export default function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();
  const offscreen = i18n.dir() === "rtl" ? "-100%" : "100%";

  const transition = {
    duration: reduceMotion ? 0 : 0.5,
    ease: [0.65, 0, 0.35, 1],
  } as const;

  return (
    <Dialog.Root
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {project && (
            <Dialog.Overlay key="overlay" asChild forceMount>
              <motion.div
                className="fixed inset-0 z-80 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
              />
            </Dialog.Overlay>
          )}
          {project && (
            <Dialog.Content
              key="content"
              asChild
              forceMount
              aria-labelledby={TITLE_ID}
              aria-describedby={undefined}
            >
              <motion.div
                className="fixed inset-y-0 inset-e-0 z-90 flex w-full max-w-140 flex-col border-s border-line bg-elev text-text shadow-card"
                initial={{ x: offscreen }}
                animate={{ x: 0 }}
                exit={{ x: offscreen }}
                transition={transition}
              >
                <Dialog.Close asChild>
                  <Button
                    variant="icon"
                    label={t("work.panel.close")}
                    className="absolute inset-e-5 top-5 sm:inset-e-6 sm:top-6"
                  >
                    <FiX aria-hidden="true" />
                  </Button>
                </Dialog.Close>

                <div className="flex-1 overflow-y-auto px-6 pb-12 pt-19 sm:px-10">
                  <div className="mb-4.5 aspect-465/290 w-full max-w-116 overflow-hidden rounded-md">
                    <Image
                      variant="photo"
                      src={project.image}
                      alt={t(`work.projects.${project.key}.alt`)}
                      width={465}
                      height={290}
                      className="object-top"
                    />
                  </div>

                  <TitleBlock
                    id={TITLE_ID}
                    as="h3"
                    badge={t(`work.categories.${project.category}`)}
                    title={t(`work.projects.${project.key}.name`)}
                    headingVariant="project"
                    badgeVariant="plain"
                    className="mb-5.5 space-y-1.5"
                  />

                  <div className="border-y border-line py-5.5">
                    <StackList
                      items={project.stack}
                      label={t("work.panel.stack")}
                    />
                  </div>

                  <Paragraph variant="body" className="mt-5.5 max-w-none">
                    {t(`work.projects.${project.key}.description`)}
                  </Paragraph>

                  <ExternalLink href={project.liveUrl} className="mt-6.5">
                    {t("work.panel.viewLive")}
                    <FiArrowRight
                      aria-hidden="true"
                      className="rtl:rotate-180"
                    />
                    <span className="sr-only">{t("work.panel.newTab")}</span>
                  </ExternalLink>
                </div>
              </motion.div>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
