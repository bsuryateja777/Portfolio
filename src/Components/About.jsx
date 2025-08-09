import React from 'react'
import profileImage from "../Assets/profile_img.jpg"
import { infoList } from "../Assets/PersonalInfo.js"

export default function About() {
    return (
        <div id="about" className='w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14'>
            <h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-7  lg:gap-8 2xl:gap-10  my-7 2xl:my-16'>

                <div className='w-64 sm:w-80 h-[390px] lg:w-[240px] lg:h-[360px] 2xl:w-[275px] 2xl:h-[450px] rounded-3xl'>
                    <img src={profileImage} alt='' className='w-full h-full rounded-2xl 2xl:rounded-3xl  ' />
                </div>

                <div className='flex-1'>
                    <p className='mb-6 2xl:mb-10 max-w-2xl font-Ovo'>

                        Iam an experienced Full Stack Developer with a strong background in building dynamic and responsive web applications.
                        I have a passion for creating user-friendly interfaces and ensuring seamless functionality across all devices.
                        My expertise lies in both front-end and back-end development, allowing me to deliver complete solutions that meet client needs.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl'>
                        {infoList.map((info, index) => (
                            <a key={index} href={`#${info.title}`}>
                                <li key={index} className='min-h-[220px] 2xl:min-h-[260px] p-3 border-[0.5px] border-border-gray-400 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 ease-in-out hover:shadow-black'>
                                    <info.icon />
                                    <h3 className='my-4 text-2xl font-semibold text-gray-700'>{info.title}</h3>
                                    <p className='text-gray-600 text-lg line-clamp-3'>{info.description}</p>
                                </li>
                            </a>
                        ))}

                    </ul>

                </div>

            </div>
        </div>
    )
}
