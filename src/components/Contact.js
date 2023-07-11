import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxdgset', 'template_gegujx7', form.current, 'ft3fiTNaFr2_e88hj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl pb-16'>Me contacter</h1>
            <form className='bg-zinc-700 flex flex-col gap-y-2 p-6 rounded-lg' style={{ width: "920px" }} ref={form} onSubmit={sendEmail}>
                <label className='font-semibold text-1xl'>Nom</label>
                <input className='bg-zinc-300 focus:bg-white outline-none text-black font-medium text-lg h-14 px-6 rounded-lg' type="text" name="user_name" placeholder='Entrer votre nom' required />
                <label className='font-semibold text-1xl pt-6'>Email</label>
                <input className='bg-zinc-300 focus:bg-white outline-none text-black font-medium text-lg h-14 px-6 rounded-lg' type="email" name="user_email" placeholder='Entrer votre email' required />
                <label className='font-semibold text-1xl pt-6'>Message</label>
                <textarea className='bg-zinc-300 focus:bg-white outline-none text-black font-medium text-lg h-56 px-6 py-4 rounded-lg' name="message" placeholder='Entrer votre message' required />
                <input className='hover:bg-white hover:text-zinc-900 text-zinc-200 mx-auto font-medium text-xl w-32 p-3 mt-6 rounded-2xl' type="submit" value="Envoyer" />
            </form>
        </div>
    )
};

export default Contact;
