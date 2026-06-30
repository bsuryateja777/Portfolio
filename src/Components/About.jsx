import React from 'react'
import profileImage from "../Assets/images/profile_img.jpg"
import { infoList } from "../data/PersonalInfo.js"
import { motion } from "framer-motion";


export default function About() {

    return (
        <motion.div id="about" className='w-full px-[5%] lg:px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Introduction
            </motion.h4>
            <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                About Me
            </motion.h2>

            <motion.div className='flex w-full flex-col lg:flex-row items-center gap-7  lg:gap-8 2xl:gap-10  my-5 2xl:my-16' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }} transition={{ duration: 0.4 }}>

                <div className="w-64 sm:w-80 h-[390px] lg:w-[240px] lg:h-[360px] 2xl:w-[275px] 2xl:h-[450px] lg:-mt-12" style={{ perspective: "1000px" }} >
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
                                Hi! I’m Surya — Full Stack Developer & Cloud Engineer. I build MERN apps and provision Azure infrastructure with Terraform at Accenture.
                            </p>
                        </div>
                    </motion.div>
                </div>


                <motion.div className='flex-1' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.8 }}>
                    <p className='mb-6 2xl:mb-10 font-ovo'>

                        I am a Full Stack Developer and Associate Software Engineer at Accenture, currently embedded with Siemens Data Cloud (SDC L1) provisioning Azure infrastructure using Terraform — writing reusable IaC modules and supporting multi-service enterprise deployments.
                        <br /><br />
                        I have hands-on experience building full-stack MERN applications, designing modular AWS infrastructure frameworks with Terraform, and architecting event-driven microservices using Kafka and Docker. I enjoy working across the full stack — from React frontends and Node/Express APIs to cloud infrastructure and container orchestration.
                    </p>

                    <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 w-full'
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} >
                        {infoList.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.7 }}
                            >
                                <li className='min-h-[220px] 2xl:min-h-[260px] p-3 border-[0.5px] border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 duration-500 ease-in-out hover:shadow-black'>
                                    <info.icon />
                                    <h3 className='my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200'>{info.title}</h3>
                                    <p className='text-gray-600 dark:text-gray-400 text-lg line-clamp-3'>{info.description}</p>
                                </li>
                            </motion.div>
                        ))}
                    </motion.ul>


                </motion.div>

            </motion.div>
        </motion.div>
    )
}
