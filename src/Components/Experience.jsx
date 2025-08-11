import React from "react";
import { experience } from "../Assets/PersonalInfo"; // adjust path
import { motion } from "framer-motion";


export default function Experience() {
  // Oldest → newest
  const sortedExperience = [...experience].reverse();

  return (
    <motion.div id="experience" className="w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
      <motion.h4 className="text-center mb-2 text-md 2xl:text-lg font-ovo" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Organisation I worked in
      </motion.h4>
      <motion.h2 className="text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        My Experience
      </motion.h2>

      <div className="relative mt-10">
        {/* Vertical line */}
        <motion.div className="absolute left-3.5 top-2 lg:top-4 2xl:top-3 bottom-10 lg:bottom-9 2xl:bottom-8 w-1 bg-blue-300" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}></motion.div>

        {sortedExperience.map((exp, index) => {
          const isCurrent = index === 0;

          return (
            <div key={index} className="flex items-start mb-10 relative">
              {/* Dot container */}
              <motion.div className="relative flex-shrink-0 w-8 flex justify-center top-6 lg:top-12" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                {/* Current job — animated ping */}
                {isCurrent ? (
                  <span className="absolute w-4 h-4 rounded-full border-2 border-red-500 animate-ping"></span>
                ) : (
                  /* Non-current — constant ring with gap */
                  <span className="absolute w-6 h-6 -top-1 rounded-full border-2 border-blue-400"></span>
                )}
                {/* Solid dot */}
                <span
                  className={`w-4 h-4 rounded-full relative z-10 ${isCurrent ? "bg-blue-500" : "bg-blue-400"
                    }`}
                ></span>
              </motion.div>

              {/* Content */}
              <motion.div className="ml-6 flex flex-col lg:flex-row lg:items-center lg:gap-4" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}>
                <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                  <h3 className="font-bold text-lg">{exp.oraganisation}</h3>
                  <p className="text-sm text-gray-700">{exp.position}</p>
                  <p className="text-xs text-gray-400">{exp.duration}</p>
                </motion.div>
                {exp.description && (
                  <motion.p className="hidden lg:flex text-sm text-gray-600 lg:ml-4 lg:border-l lg:pl-4" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}>
                    {exp.description}
                  </motion.p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
