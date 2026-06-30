import React, { useState } from 'react'
import { RightArrow } from '../Assets/icons/Icons'
import { motion } from "framer-motion";



export default function Contact() {

    const [result, setResult] = useState("");
    const accessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(`Thank you ${name}! I’ve received your message and will get back to you at ${email} shortly.`);
            event.target.reset();
            setEmail("")
            setName("")
            setMessage("")
        } else {
            setResult(data.message);
        }

    };

    return (
        <motion.div id="contact" className='relative w-full px-[6%] lg:px-[12%] mt-20 py-24 -scroll-mt-6 lg:-scroll-mt-4 2xl:-scroll-mt-1' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="absolute inset-0 bg-header-bg dark:bg-contact-bg bg-no-repeat bg-cover bg-center"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
                }}
            />
            <div className="relative z-10">
                <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    Connect With Me
                </motion.h4>
                <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    Get in Touch
                </motion.h2>

                <motion.p className='text-center max-w-xl mx-auto mt-4 2xl:mt-5 mb-8 2xl:mb-12 font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {result || "I'd love to hear from you! If you have any questions, comments, or feedback, Please use the form below."}
                </motion.p>

                <form onSubmit={sendEmail} className='max-w-2xl mx-auto mt-16 lg:mt-0'>
                    <motion.div className='grid grid-cols-auto md:grid-cols-2 gap-6 mt-6 mb-4 2xl:mt-10 2xl:mb-8' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' />
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' />
                    </motion.div>
                    <motion.textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' required className='min-h-[16rem] lg:min-h-[10rem] 2xl:min-h-[14rem] resize-none w-full px-3 py-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
                    <motion.button type='submit' className='mt-5 md:mt-0 py-2.5 px-8 w-max flex items-center justify-between gap-2 bg-gray-600 text-white rounded-full mx-auto hover:bg-gray-500 duration-500'
                    whileTap={{scale:0.7}} initial={{y:5, opacity:0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.25}}>
                        Submit now<RightArrow />
                    </motion.button>
                </form>
            </div>
        </motion.div>
    )
}
