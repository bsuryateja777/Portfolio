import React from "react";
import { experience } from "../Assets/PersonalInfo"; // adjust path

export default function Experience() {
  // Oldest → newest
  const sortedExperience = [...experience].reverse();

  return (
    <div
      id="experience"
      className="w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14"
    >
      <h4 className="text-center mb-2 text-md 2xl:text-lg font-ovo">
        Organisation I worked in
      </h4>
      <h2 className="text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden">
        My Experience
      </h2>

      <div className="relative mt-10">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-2 lg:top-4 2xl:top-3 bottom-10 lg:bottom-9 2xl:bottom-8 w-1 bg-blue-300"></div>

        {sortedExperience.map((exp, index) => {
          const isCurrent = index === 0;

          return (
            <div key={index} className="flex items-start mb-10 relative">
              {/* Dot container */}
              <div className="relative flex-shrink-0 w-8 flex justify-center top-6 lg:top-12">
                {/* Current job — animated ping */}
                {isCurrent ? (
                  <span className="absolute w-4 h-4 rounded-full border-2 border-red-500 animate-ping"></span>
                ) : (
                  /* Non-current — constant ring with gap */
                  <span className="absolute w-6 h-6 -top-1 rounded-full border-2 border-blue-400"></span>
                )}
                {/* Solid dot */}
                <span
                  className={`w-4 h-4 rounded-full relative z-10 ${
                    isCurrent ? "bg-blue-500" : "bg-blue-400"
                  }`}
                ></span>
              </div>

              {/* Content */}
              <div className="ml-6 flex flex-col lg:flex-row lg:items-center lg:gap-4">
                <div>
                  <h3 className="font-bold text-lg">{exp.oraganisation}</h3>
                  <p className="text-sm text-gray-700">{exp.position}</p>
                  <p className="text-xs text-gray-400">{exp.duration}</p>
                </div>
                {exp.description && (
                  <p className="hidden lg:flex text-sm text-gray-600 lg:ml-4 lg:border-l lg:pl-4">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
