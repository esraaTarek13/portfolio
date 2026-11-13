import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiX } from "react-icons/fi";
import type { Project } from "@/config/projects";
import ExternalButton from "../atoms/ExternalButton";
import IconButton from "../atoms/IconButton";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import ProjectTitle from "../molecules/ProjectTitle";
import StackList from "../molecules/StackList";

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
}

const transition = { duration: 0.5, ease: [0.65, 0, 0.35, 1] } as const;

export default function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  const { t, i18n } = useTranslation();
  const offscreen = i18n.dir() === "rtl" ? "-100%" : "100%";

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
            <Dialog.Content key="content" asChild forceMount>
              <motion.div
                className="fixed inset-y-0 inset-e-0 z-90 flex w-full max-w-140 flex-col border-s border-line bg-elev text-text shadow-card"
                initial={{ x: offscreen }}
                animate={{ x: 0 }}
                exit={{ x: offscreen }}
                transition={transition}
              >
                <Dialog.Close asChild>
                  <IconButton
                    label={t("work.panel.close")}
                    className="absolute inset-e-5 top-5 z-100 sm:inset-e-6 sm:top-6"
                  >
                    <FiX aria-hidden="true" />
                  </IconButton>
                </Dialog.Close>

                <div className="flex-1 overflow-y-auto px-6 pb-12 pt-19 sm:px-10">
                  <div className="aspect-465/290 w-full max-w-116 overflow-hidden rounded-md mb-4.5">
                    <Image
                      variant="photo"
                      src={project.image}
                      alt={t(`work.projects.${project.key}.alt`)}
                      width={465}
                      height={290}
                      className="object-top"
                    />
                  </div>

                  <Dialog.Title asChild>
                    <div className="mb-5.5">
                      <ProjectTitle
                        as="h2"
                        name={t(`work.projects.${project.key}.name`)}
                        category={t(`work.categories.${project.category}`)}
                        className="space-y-1.5"
                      />
                    </div>
                  </Dialog.Title>

                  <div className="border-y border-line py-5.5">
                    <StackList
                      items={project.stack}
                      label={t("work.panel.stack")}
                    />
                  </div>

                  <Dialog.Description asChild>
                    <Paragraph variant="body" className="max-w-none mt-5.5">
                      {t(`work.projects.${project.key}.description`)}
                    </Paragraph>
                  </Dialog.Description>

                  <ExternalButton href={project.liveUrl} className="mt-6.5">
                    {t("work.panel.viewLive")}
                    <FiArrowRight
                      aria-hidden="true"
                      className="rtl:rotate-180"
                    />
                    <span className="sr-only">{t("work.panel.newTab")}</span>
                  </ExternalButton>
                </div>
              </motion.div>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}