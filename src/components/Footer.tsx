import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-800/80 py-20">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-12">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className=" text-gray-200 text-lg font-medium"
          >
            &copy; {new Date().getFullYear()} Iván Rodríguez.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-10">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-gray-300 text-2xl mb-5 font-medium font-title">
                Elsewhere
              </h3>
              <ul className="flex flex-col gap-4 text-indigo-700">
                <li>
                  <a
                    href="https://github.com/IvanARM21"
                    className="text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200 "
                    aria-label="My Github Account"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-moreira-b9848628b/"
                    className="text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200 "
                    aria-label="My Linkedin Account"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-gray-300 text-2xl mb-5 font-medium font-title">
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="mailto:ivanrms371@gmail.com"
                    className="text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200"
                  >
                    ivanrms371@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="sms:+59899612953"
                    className="text-gray-400 font-medium hover:text-gray-300 transition-colors duration-200 "
                  >
                    + 598 99 612 953
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
