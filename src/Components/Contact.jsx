import React, { useState } from 'react'
import headerBg from '../Assets/header_bg.png'
import { RightArrow } from '../Assets/Icons'


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
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className='w-full px-12% py-10 scroll-mt-8 md:scroll-mt-12 bg-header-bg bg-opacity-50 bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect With Me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in Touch</h2>

            <p className='text-center max-w-xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback,
                Please use the form below.
            </p>

            <form onSubmit={sendEmail} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <textarea rows='6' name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/85 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now<RightArrow /></button>

                <p className='mt-4'>{result}</p>

            </form>


        </div>
    )
}
