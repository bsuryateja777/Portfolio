import React from 'react'
import { techStack } from '../Assets/PersonalInfo.js'
import Snowflake from '../Assets/snowflake-color.svg'
import SnowflakeBlack from '../Assets/snowflake.svg'

export default function
    () {
    return (

        <div id="tech" className='w-full px-[12%] pt-10 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14'>
            <h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo'>Tech I Know</h4>
            <h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden'>Technology Stack</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-cols-6 gap-20 lg:gap-10 2xl:gap-24 px-12 lg:px-42 2xl:px-46 place-items-center mt-12">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-between p-4 hover:scale-110 transition-all duration-300 w-full max-w-[200px] h-32 gap-2 lg:gap-3 2xl:gap-6">
                        <div className="flex items-center justify-center h-16 2xl:h-20">
                            <tech.icon className=" h-20 w-20 lg:h-26 lg:w-24 2xl:h-32 2xl:w-26" />
                        </div>
                        <p className="text-sm text-center text-gray-700 font-semibold mt-2">{tech.title}</p>
                    </div>

                ))}
                <div className='flex flex-col items-center justify-between p-4 hover:scale-110 transition-all duration-300 w-full max-w-[200px] h-32 gap-2 lg:gap-3 2xl:gap-6'>
                    <div className="flex items-center justify-center h-16 w-20 lg:h-26  lg:w-24 2xl:h-[80px] ">
                        <img src={Snowflake} alt="Snowflake" className='h-full w-full object-contain' />
                    </div>
                    <p className='text-sm text-center text-gray-700 font-semibold mt-2'>Snowflake</p>
                </div>
            </div>

        </div>
    )
}
