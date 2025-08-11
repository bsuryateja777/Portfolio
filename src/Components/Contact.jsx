import React, { useState } from 'react'
import headerBg from '../Assets/header_bg.png'
import { RightArrow } from '../Assets/Icons'
import { motion } from 'motion/react'


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
            console.log("Error", data);
            setResult(data.message);
        }

    };

    return (
        <motion.div id="contact" className='w-full px-[6%] lg:px-[12%] mt-20 py-10 pb-34 md:pb-2 2xl:pb-2.5 scroll-mt-8 lg:scroll-mt-10 2xl:scroll-mt-14 bg-header-bg bg-no-repeat  bg-cover bg-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <motion.h4 className='text-center mb-2 text-md 2xl:text-lg font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Connect With Me
            </motion.h4>
            <motion.h2 className='text-center text-4xl 2xl:text-5xl font-ovo overflow-hidden' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Get in Touch
            </motion.h2>

            <motion.p className='text-center max-w-xl mx-auto mt-4 2xl:mt-5 mb-8  2xl:mb-12 font-ovo' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {!result ?
                    "I'd love to hear from you! If you have any questions, comments, or feedback, Please use the form below."
                    :
                    result
                }
            </motion.p>

            <form onSubmit={sendEmail} className='max-w-2xl mx-auto mt-16 lg:mt-0'>
                <motion.div className='grid grid-cols-auto md:grid-cols-2 gap-6 mt-6 mb-4 2xl:mt-10 2xl:mb-8' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </motion.div>
                <motion.textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' required className='min-h-[16rem] lg:min-h-[10rem] 2xl:min-h-[14rem] resize-none w-full px-3 py-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
                <motion.button type='submit' className='mt-5 md:mt-0 py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/85 text-white rounded-full mx-auto hover:bg-black duration-500'
                whileTap={{scale:0.70}} initial={{y:5, opacity:0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.25   }}>
                    Submit now<RightArrow />
                </motion.button>

            </form>


        </motion.div>
    )
}
