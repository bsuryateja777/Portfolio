import React from 'react'
import { techStack } from '../Assets/PersonalInfo.js'
import Snowflake from '../Assets/snowflake-color.svg'
import SnowflakeBlack from '../Assets/snowflake.svg'

export default function
    () {
    return (

        <div id="tech" className='w-full px-12% py-10 scroll-mt-8 md:scroll-mt-12'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Tech I Know</h4>
            <h2 className='text-center text-5xl font-ovo'>Technology Stack</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-10 md:px-32 place-items-center mt-10">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-300 w-full max-w-[120px]">
                        <tech.icon />
                        <p className="mt-2 text-md text-center text-gray-700  font-semibold">{tech.title}</p>
                    </div>
                ))}
                <div className='flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-300 w-full max-w-[120px]'>
                    <img src={Snowflake} alt="" className='w-32' />
                    <p className='mt-2 text-md text-center text-gray-700  font-semibold'>Snowflake</p>
                </div>
            </div>

        </div>
    )
}
