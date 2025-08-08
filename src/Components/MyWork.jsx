import React, { useState } from 'react'
import { projects } from '../Assets/PersonalInfo.js'
import ImageSlider from './ImageSlider'
import { Deployed, Source } from '../Assets/Icons';
import UseInView from '../Assets/UseInView.js';

export default function MyWork() {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (

        <div id="work" className='w-full px-[5%] 2xl:px-[9%] pt-10 scroll-mt-6 lg:scroll-mt-8 2xl:scroll-mt-12'>
            <h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo'>My Portfolio</h4>
            <h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden'>Technical Projects</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my development portfolio! Explore a collection of projects showcasing my expertise in development</p>

            <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-10">
                {projects.map((project, index) => {
                    // mobile scroll 
                    const [ref, inView] = UseInView();
                    return (
                        <div key={index} ref={ref} className="relative flex flex-col items-center rounded-2xl justify-center rounded-xl bg-gray-100 px-1.5 py-2 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-800 transition-all duration-500 w-full pb-3 group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)} >

                            <div className="absolute inset-0 bg-cover bg-center transition-opacity rounded-2xl duration-500 opacity-25 group-hover:opacity-50 bg-project-bg" />
                            <div className="relative z-10 w-full rounded-2xl">
                                <ImageSlider photos={project.photos} cardHovered={hoveredIndex === index} cardInView={inView} />
                                <h3 className="mt-2 text-2xl text-begin text-gray-900 font-ovo capitalize line-clamp-1" title={`${project.title}`} >
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-gray-600 text-md line-clamp-3 leading-7 mb-2">
                                    {project.description}
                                </p>
                                <div className="bg-gray-400 min-h-[1.5px] min-w-full    " />
                                <div className="flex flex-row ml-2 mt-2 self-start gap-3">
                                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                                        <Source className="size-7 2xl:size-8" />
                                    </a>
                                    <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                                        <Deployed className="size-7 2xl:size-8" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
