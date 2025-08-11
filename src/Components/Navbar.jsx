import React, { useState, useRef, useEffect } from 'react'
import headerBg from "../Assets/header_bg.png"
import closeBlack from "../Assets/close_black.png"
import menuBlack from "../Assets/menu_black.png"
import { MoonIcon, RightCrossArrow } from "../Assets/Icons";
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
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <div className=''>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <img src={headerBg} alt="Header Background" className='w-full' />
            </div>

            <nav className={`${isScroll ? ' backdrop-blur-lg shadow-lg scale-100  md:scale-110 ' : 'opacity-90 scale-105'} w-full top-0 fixed px-5 pb-1 pt-4 lg:px-8  xl:px-[6%] flex items-center justify-between z-50 transition-all duration-500 transform origin-center `}>

                <a href="#head">
                    <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-ovo font-bold -z-20'>Surya Teja Reddy<span className='lg:text-3xl text-4xl text-red-500'>.</span></h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 2xl:gap-8 rounded-full lg:px-6 2xl:px-10 lg:py-2.5  2xl:py-3 ${isScroll ? '' : 'shadow-lg'}`}>
                    <li><a href="#root" className='font-ovo'>      Home        </a></li>
                    <li><a href="#about" className='font-ovo'>    About Me    </a></li>
                    <li><a href="#experience" className='font-ovo'>    My Experience    </a></li>
                    <li><a href="#tech" className='font-ovo'> Tech. Stack    </a></li>
                    <li><a href="#work" className='font-ovo'>     My Work     </a></li>
                    <li><a href="#contact" className='font-ovo'>  Contact Me  </a></li>
                </ul>


                <div className='flex gap-2 2xl:gap-4 items-center'>

                    <button className='hidden'>
                        <MoonIcon />
                    </button>

                    <motion.a href="#contact" className='font-Ovo hidden lg:flex items-center lg:gap-2 2xl:gap-3 lg:px-5 2xl:px-10 lg:py-2 2xl:py-2.5 border border-gray-500 rounded-full ml-4' whileTap={{scale:0.95}}>
                        Contact <RightCrossArrow />
                    </motion.a>

                    <button className='block md:hidden ml-2' onClick={openMenu}>
                        <img src={menuBlack} alt="" className='w-6' />
                    </button>

                </div>

                {/* -----------  mobile menu ----------- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col pt-[60px] pl-10 pr-20 fixed -right-64 top-0 w-55 z-50 h-screen bg-lightHover transition duration-500 ease-in-out space-y-5" >
                    <div className="absolute right-8 top-7" onClick={closeMenu}>
                        <img src={closeBlack} alt="" className="w-5" />
                    </div>

                    <li><a href="#root" className="font-Ovo" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="font-Ovo" onClick={closeMenu}>About me</a></li>
                    <li><a href="#experience" className="font-Ovo" onClick={closeMenu}>My Experience</a></li>
                    <li><a href="#tech" className="font-Ovo" onClick={closeMenu}>Tech. Stack</a></li>
                    <li><a href="#work" className="font-Ovo" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" className="font-Ovo" onClick={closeMenu}>Contact me</a></li>
                </ul>


            </nav>

        </div>
    )
}
