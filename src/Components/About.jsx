import React from 'react'
import profileImage from "../Assets/profile_img.jpg"
import { infoList } from "../Assets/PersonalInfo.js"
import { motion } from "framer-motion";


export default function About() {

    const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <motion.div id="about" className='w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Introduction
            </motion.h4>
            <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                About Me
            </motion.h2>

            <motion.div className='flex w-full flex-col lg:flex-row items-center gap-7  lg:gap-8 2xl:gap-10  my-7 2xl:my-16' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>

                <div className="w-64 sm:w-80 h-[390px] lg:w-[240px] lg:h-[360px] 2xl:w-[275px] 2xl:h-[450px]" style={{ perspective: "1000px" }} >
                    <motion.div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }} initial={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }} >
                        {/* Front Side */}
                        <motion.div className="absolute w-full h-full rounded-3xl" style={{ backfaceVisibility: "hidden" }} initial={{x:25}} whileInView={{x:0}} transition={{duration:1, delay:0.5}} >
                            <img src={profileImage} alt="Profile" className="w-full h-full rounded-3xl object-cover" />
                        </motion.div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full rounded-3xl bg-gray-800 flex items-center justify-center p-4"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }} >
                            <p className="text-white text-lg text-center">
                                Hi! I’m Surya — Full Stack Developer passionate about creating responsive and dynamic web apps.
                            </p>
                        </div>
                    </motion.div>
                </div>


                <motion.div className='flex-1' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.8 }}>
                    <p className='mb-6 2xl:mb-10 max-w-2xl font-Ovo'>

                        Iam an experienced Full Stack Developer with a strong background in building dynamic and responsive web applications.
                        I have a passion for creating user-friendly interfaces and ensuring seamless functionality across all devices.
                        My expertise lies in both front-end and back-end development, allowing me to deliver complete solutions that meet client needs.
                    </p>

                    <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl'
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} >
                        {infoList.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.7 }}
                            >
                                <li className='min-h-[220px] 2xl:min-h-[260px] p-3 border-[0.5px] border-border-gray-400 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 ease-in-out hover:shadow-black'>
                                    <info.icon />
                                    <h3 className='my-4 text-2xl font-semibold text-gray-700'>{info.title}</h3>
                                    <p className='text-gray-600 text-lg line-clamp-3'>{info.description}</p>
                                </li>
                            </motion.div>
                        ))}
                    </motion.ul>


                </motion.div>

            </motion.div>
        </motion.div>
    )
}
