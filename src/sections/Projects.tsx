import { motion } from "motion/react";
import { ProjectGrid } from "../components/ProjectGrid";

export const Projects = () => {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-title font-bold text-center text-gray-300"
          >
            Projects
            <span className="text-indigo-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 rounded-full bg-indigo-600/60 mx-auto my-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-400 mt-6 max-w-2xl mx-auto text-center"
          >
            Here are some of the projects that I've worked on.
          </motion.p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
};
