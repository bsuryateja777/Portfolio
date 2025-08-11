import React from 'react'
import { techStack } from '../Assets/PersonalInfo.js'
import Snowflake from '../Assets/snowflake-color.svg'
import { motion } from "framer-motion";


export default function TechnologyStack () {
    const snowflakeIndex = techStack.length; // delay after last mapped icon

    return (
        <motion.div id="tech" className='w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14'
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3 }}>
            <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                Tech I Know
            </motion.h4>
            <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                Technology Stack
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-20 lg:gap-10 2xl:gap-24 px-12 lg:px-42 2xl:px-46 place-items-center mt-12">
                {techStack.map((tech, index) => (
                    <motion.div key={index} className="flex flex-col items-center justify-between p-4 transition-all duration-300 w-full max-w-[200px] h-32 gap-2 lg:gap-3 2xl:gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: index * 0.3 }}>
                        <motion.div className="flex items-center justify-center h-16 2xl:h-20" whileHover={{scale:1.15}} >
                            <tech.icon className="h-20 w-20 lg:h-26 lg:w-24 2xl:h-32 2xl:w-26" />
                        </motion.div>
                        <p className="text-sm text-center text-gray-700 font-semibold mt-2" >
                            {tech.title}
                        </p>
                    </motion.div>
                ))}

                {/* Snowflake item with same animation pattern */}
                <motion.div className='flex flex-col items-center justify-between p-4x transition-all duration-300 w-full max-w-[200px]  h-32 gap-2 lg:gap-3 2xl:gap-6' 
                initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.5, delay: snowflakeIndex * 0.3}} >
                    <div className="flex items-center justify-center h-16 w-20 lg:h-26 lg:w-24 2xl:h-[80px]" >
                        <motion.img src={Snowflake} alt="Snowflake" className='h-full w-full relative top-3 object-contain group transition:all duration-300 hover:scale-125' transition={{duration:0.1}} whileHover={{scale:1.25}} />
                    </div>
                    <p className='text-sm text-center text-gray-700 font-semibold group-hover:scale-125 relative -top-2 mt-2' >
                        Snowflake
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
