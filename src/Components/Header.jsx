import React from 'react'
import profileImage from "../Assets/profile_img.jpg"
import handIcon from "../Assets/hand_icon.png"
import { motion } from "framer-motion";
import { RightArrow, DownloadIcon } from '../Assets/Icons'

export default function Header() {

    return (
        <div id="head" className='w-11/12 my-[20px] mt-[90px] md:mt-[113px] 2xl:mt-[160px] max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3 2xl:gap-4 scroll-mt-28 lg:scroll-mt-32 2xl:scroll-mt-40'>

            <motion.div className='' initial={{ y:-15 }} whileInView={{ y:0 }} transition={{ duration: 1}}>

                <img src={profileImage} alt="profile photo" className='rounded-full w-32 h-32 lg:w-[120px] lg:h-[120px] 2xl:w-[150px] 2xl:h-[150px] object-cover object-top' />

            </motion.div>

            <h3 className='flex items-end gap-2 text-lg lg:text-xl  2xl:text-2xl font-ovo relative top-1.5'>
                Hi! I'm Surya Teja Reddy<img src={handIcon} alt="" className='w-8 ' />
            </h3>
            <motion.h1 className='text-4xl sm:text-6xl lg:text-[50px] 2xl:text-[66px] font-ovo overflow-hidden' initial={{ y: -15, opcaity: 0 }} whileInView={{ y: 0, opcaity: 1 }} transition={{ duration: 0.8 }}>
                A Full Stack Developer based in India.
            </motion.h1>
            <motion.p className='text-gray-500 mb-3 md:mb-4 2xl:mb-6' initial={{ y: -15, opcaity: 0 }} whileInView={{ y: 0, opcaity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                I am a Full Stack Developer with a passion for creating dynamic and responsive web applications.
                I have experience in both front-end and back-end development,
                and I am always eager to learn new technologies and improve my skills.
            </motion.p>

            <div className='flex flex-col sm:flex-row gap-2 md:gap-4 2xl:mt-4'>
                <motion.a href="#contact" className=' px-10 lg:px-8 2xl:px-10 py-3 lg:py-2 2xl:py-3 border rounded-full border-white bg-black/85 hover:bg-black text-white flex items-center justify-center gap-2' initial={{ y: -15, opcaity: 0 }} whileInView={{ y: 0, opcaity: 1 }} transition={{ duration: 0.8}} whileTap={{scale:0.70}} >
                    Contact Me <RightArrow />
                </motion.a>
                <motion.a href="/Resume.pdf" download className='px-10 lg:px-8 2xl:px-10 py-3 lg:py-2 2xl:py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-200' initial={{ y: -15, opcaity: 0 }} whileInView={{ y: 0, opcaity: 1 }} transition={{ duration: 0.8}} whileTap={{scale:0.70}}>
                    My Resume <DownloadIcon />
                </motion.a>
            </div>

        </div>
    )
}
