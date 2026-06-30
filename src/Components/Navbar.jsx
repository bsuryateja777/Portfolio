import React, { useState, useRef, useEffect } from 'react'
import headerBg from "../Assets/images/header_bg.png"
import closeBlack from "../Assets/images/close_black.png"
import menuBlack from "../Assets/images/menu_black.png"
import { MoonIcon, RightCrossArrow } from "../Assets/icons/Icons";
import { motion } from "framer-motion";




export default function Navbar() {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false)

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className=''>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <img src={headerBg} alt="Header Background" className='w-full dark:hidden' />
            </div>

            <nav className={`${isScroll ? 'backdrop-blur-lg shadow-lg scale-100 md:scale-110 dark:bg-gray-900/70' : 'opacity-90 scale-105'} w-full top-0 fixed px-5 pb-4 pt-4 lg:px-8 xl:px-[6%] flex items-center justify-between z-50 transition-all duration-500 transform origin-center`}>

                {/* Dark mode starry bg with subtle blur — clipped container prevents edge artifacts */}
                {!isScroll && (
                    <div className='hidden dark:block absolute inset-0 -z-10 overflow-hidden'>
                        <div className='absolute -inset-2 bg-contact-bg bg-cover bg-top bg-no-repeat blur-[1px]' />
                    </div>
                )}

                <a href="#head">
                    <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-ovo font-bold -z-20 dark:text-white'>Surya Teja Reddy<span className='lg:text-3xl text-4xl text-red-500'>.</span></h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 2xl:gap-8 rounded-full lg:px-6 2xl:px-10 lg:py-2.5 2xl:py-3 ${isScroll ? '' : 'shadow-lg dark:shadow-gray-700'}`}>
                    <li><a href="#root" className='font-ovo dark:text-gray-200'>Home</a></li>
                    <li><a href="#about" className='font-ovo dark:text-gray-200'>About Me</a></li>
                    <li><a href="#experience" className='font-ovo dark:text-gray-200'>My Experience</a></li>
                    <li><a href="#tech" className='font-ovo dark:text-gray-200'>Tech. Stack</a></li>
                    <li><a href="#work" className='font-ovo dark:text-gray-200'>My Work</a></li>
                    <li><a href="#contact" className='font-ovo dark:text-gray-200'>Contact Me</a></li>
                </ul>

                <div className='flex gap-2 2xl:gap-4 items-center'>

                    <button className='hidden'>
                        <MoonIcon />
                    </button>

                    <motion.a href="#contact" className='font-ovo hidden lg:flex items-center lg:gap-2 2xl:gap-3 lg:px-5 2xl:px-10 lg:py-2 2xl:py-2.5 border border-gray-500 rounded-full ml-4 dark:text-gray-200 dark:border-gray-500' whileTap={{scale:0.95}}>
                        Contact <RightCrossArrow />
                    </motion.a>

                    <button className='block md:hidden ml-2' onClick={openMenu}>
                        <img src={menuBlack} alt="" className='w-6 dark:invert' />
                    </button>

                </div>

                {/* -----------  mobile menu ----------- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col pt-[60px] pl-10 pr-20 fixed -right-64 top-0 w-55 z-50 h-screen bg-lightHover dark:bg-gray-800 transition duration-500 ease-in-out space-y-5">
                    <button type="button" aria-label="Close menu" className="absolute right-8 top-7" onClick={closeMenu}>
                        <img src={closeBlack} alt="Close menu" className="w-5 dark:invert" />
                    </button>

                    <li><a href="#root" className="font-ovo dark:text-gray-200" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="font-ovo dark:text-gray-200" onClick={closeMenu}>About me</a></li>
                    <li><a href="#experience" className="font-ovo dark:text-gray-200" onClick={closeMenu}>My Experience</a></li>
                    <li><a href="#tech" className="font-ovo dark:text-gray-200" onClick={closeMenu}>Tech. Stack</a></li>
                    <li><a href="#work" className="font-ovo dark:text-gray-200" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" className="font-ovo dark:text-gray-200" onClick={closeMenu}>Contact me</a></li>
                </ul>

            </nav>

        </div>
    )
}
