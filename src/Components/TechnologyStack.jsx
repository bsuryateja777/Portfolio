import React from 'react'
import { techStack } from '../data/PersonalInfo.js'
import { motion } from "framer-motion";


export default function TechnologyStack () {
    return (
        <div id="tech" className='w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14'>
            <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "0px 0px -120px 0px" }} transition={{ duration: 1 }}>
                Tech I Know
            </motion.h4>
            <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "0px 0px -120px 0px" }} transition={{ duration: 1 }}>
                Technology Stack
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-20 lg:gap-10 2xl:gap-24 px-12 lg:px-42 2xl:px-46 place-items-center mt-12">
                {techStack.map((tech, index) => (
                    <motion.div key={tech.title} className="flex flex-col items-center justify-between p-4 transition-all duration-300 w-full max-w-[200px] h-32 gap-2 lg:gap-3 2xl:gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, margin: "0px 0px -150px 0px" }} transition={{ duration: 1, delay: index * 0.3 }}>
                        <motion.div className="flex items-center justify-center h-16 2xl:h-20 text-gray-900 dark:text-white" whileHover={{scale:1.15}} >
                            <tech.icon className="h-20 w-20 lg:h-26 lg:w-24 2xl:h-32 2xl:w-26" />
                        </motion.div>
                        <p className="text-sm text-center text-gray-700 dark:text-gray-300 font-semibold mt-2" >
                            {tech.title}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
