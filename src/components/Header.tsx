import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const linksRef = useRef<{ [key: string]: HTMLElement }>({});

  const updateIndicator = (linkId: string) => {
    const linkElement = linksRef.current[linkId];
    if (linkElement) {
      setIndicatorStyle({
        width: linkElement.offsetWidth,
        left: linkElement.offsetLeft,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeLink);
  }, [activeLink]);

  const handleClick = (linkId: string) => setActiveLink(linkId);

  useEffect(() => {
    const updateLink = () => {
      const sectionsElements = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 60;

      sectionsElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (!sectionId) {
          console.error("You need provide an id to the section");
          return;
        }

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          handleClick(sectionId);
        }
      });
    };

    window.addEventListener("scroll", updateLink);
  }, []);

  return (
    <header className="max-w-screen-xl w-screen fixed left-1/2 -translate-x-1/2 top-4 flex justify-center h-14 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center gap-2 relative backdrop-blur-3xl  w-fit rounded-full px-2  header-animation "
      >
        <div
          className="absolute bottom-2 h-10  bg-indigo-600/40 rounded-full transition-all duration-300 -z-10"
          style={{
            width: `${indicatorStyle.width}px`,
            left: `${indicatorStyle.left}px`,
          }}
        />

        <a
          ref={(el) => {
            if (el) linksRef.current["about"] = el;
          }}
          href="#about"
          className={twMerge(
            "text-gray-200 font-semibold px-4 sm:px-6 py-2 text-sm md:text-base transition-colors duration-300 links-animation",
            activeLink === "about" && "active",
          )}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          ref={(el) => {
            if (el) linksRef.current["projects"] = el;
          }}
          href="#projects"
          className={twMerge(
            "text-gray-200 font-semibold px-4 sm:px-6 py-2 text-sm md:text-base transition-colors duration-300 links-animation",
            activeLink === "projects" && "active",
          )}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        <a
          href="mailto:ivanrms371@gmail.com"
          className="text-gray-200 font-semibold px-4 sm:px-6 py-2 text-sm md:text-base transition-colors duration-300"
        >
          Contact
        </a>
      </motion.div>
    </header>
  );
};
