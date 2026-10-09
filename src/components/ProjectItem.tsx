import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { GithubIcon } from "../icons/Github";
import { PreviewIcon } from "../icons/PreviewIcon";
import { motion } from "motion/react";
import type { Project } from "../interfaces/project.interface";

interface Props {
  project: Project;
  projectIndex: number;
}

export const ProjectItem = ({ project, projectIndex }: Props) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : null,
  );

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!windowWidth) return null;

  return (
    <li className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-5 md:gap-10 pb-15 border-b border-neutral-800/80 last-of-type:border-0 last-of-type:pb-0">
      <motion.img
        initial={{
          opacity: 0,
          x: windowWidth > 1024 ? (projectIndex % 2 === 0 ? -20 : 20) : 0,
          y: windowWidth < 1024 ? -20 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        src={project.image}
        alt={`Image project ${project.title}`}
        className="w-full h-auto lg:w-[500px] lg:h-[400px] object-cover rounded-4xl"
        loading="lazy"
        width={400}
        height={200}
      />
      <div className=" flex flex-col w-full lg:w-1/2">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-title font-bold text-neutral-300  text-nowrap overflow-hidden"
        >
          {project.title}
        </motion.h3>
        <ul className="flex gap-2 lg:gap-4 mt-4 flex-wrap">
          {project.technologies.map(
            ({ name, icon: Icon, color }, technologyIndex) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 * technologyIndex }}
                viewport={{ once: true }}
                key={`${project.title}-${name}`}
                className={twMerge(
                  "text-neutral-50 font-medium bg-purple-600/40 px-3 py-1.5 text-xs md:text-sm  rounded-full flex gap-1.5 items-center",
                  color,
                )}
              >
                <Icon className="size-5" />
                {name}
              </motion.li>
            ),
          )}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg mt-6 flex-1 whitespace-pre-line"
        >
          {project.description}
        </motion.p>

        <div className="flex gap-4 mt-6">
          {project?.codeLink && (
            <motion.a
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              target="_blank"
              href={project.codeLink}
              className="bg-indigo-700 hover:bg-indigo-800 transition-colors duration-300 text-sm px-6 py-3 rounded-full text-neutral-100 flex gap-2 items-center cursor-pointer"
            >
              <GithubIcon className="size-4" />
              Code
            </motion.a>
          )}

          {/* Renderizar Preview Link */}
          {project?.previewLink && (
            <motion.a
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              target="_blank"
              href={project.previewLink}
              className={`
        text-sm px-6 py-3 rounded-full flex gap-2 items-center cursor-pointer transition-colors duration-300
        ${
          project.codeLink
            ? "bg-indigo-950/60 hover:bg-indigo-950 text-indigo-600"
            : "bg-indigo-700 hover:bg-indigo-800 text-neutral-100"
        }
      `}
            >
              <PreviewIcon className="size-4" />
              Preview
            </motion.a>
          )}
        </div>
      </div>
    </li>
  );
};
