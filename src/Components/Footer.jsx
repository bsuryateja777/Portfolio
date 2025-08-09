import React from 'react';
import { Mail } from '../Assets/Icons';
import LinkedIn from '../Assets/linkedin.svg'
import GitHub from '../Assets/github.svg'
import LeetCode from '../Assets/leetcode.svg'
import Twitter from '../Assets/twitter.svg'
import Instagram from '../Assets/instagram.svg'

export default function Footer() {
    

    return (
        <div className="flex flex-col items-center justify-between pt-3 w-full min-h-[100px]">

            {/* Name at top */}
            <div className="text-center mb-3">
                <a href="#head" className="block">
                    <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-ovo font-bold">
                        Surya Teja Reddy
                        <span className="lg:text-3xl 2xl:text-4xl text-red-500">.</span>
                    </h1>
                </a>
            </div>

            {/* Social Links row */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-16 mt-3">
                <div className="flex items-center gap-2">
                    <Mail className="size-4 lg:size-5 2xl:size-6" />
                    <a href="mailto:bsuryateja777@gmail.com" className="hover:underline font-ovo">
                        bsuryateja777@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <img src={LinkedIn} alt="" className='w-4' />
                    <a href="https://www.linkedin.com/in/barla-surya-teja-reddy-05b6741a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:underline font-ovo">
                        LinkedIn
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <img src={GitHub} alt="" className='w-5 relative bottom-0.5' />
                    <a href="https://github.com/bsuryateja777/" className="hover:underline font-ovo">
                        GitHub
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <img src={Instagram} alt="" className='w-5' />
                    <a href="https://www.instagram.com/___suryaaateja_?igsh=OWJkaXF5djNleHQ4&utm_source=qr" className="hover:underline font-ovo">
                        Instagram
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <img src={Twitter} alt="" className='w-5 relative' />
                    <a href="https://x.com/_suryateja_777?s=21" className="hover:underline font-ovo">
                        Twitter
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <img src={LeetCode} alt="" className='w-5 relative bottom-0.5' />
                    <a href="https://leetcode.com/u/surya_teja_reddy_777/" className="hover:underline font-ovo">
                        LeetCode
                    </a>
                </div>
            </div>


            <div className='hidden md:flex text-center items-center justify-center w-11/12 border-t border-gray-300 mx-[10%] mt-3 py-3'>
                <p className="font-ovo text-gray-500">
                    &copy; {new Date().getFullYear()} Surya Teja Reddy. All rights reserved.
                </p>
            </div>

        </div>
    );
}
