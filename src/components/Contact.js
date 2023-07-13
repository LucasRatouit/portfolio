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

    function Input(props) {
        return <><label for={props.for} className='font-semibold text-1xl pt-6'>{props.nameLabel}</label>
            <input className='bg-zinc-300 focus:bg-white outline-none text-black font-medium text-lg h-14 px-6 rounded-lg' type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} required /></>
    }

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl pb-16 max-sm:text-4xl'>Me contacter</h1>
            <form className='bg-zinc-700 flex flex-col gap-y-2 px-6 pb-6 rounded-lg w-920 max-sm:w-full' ref={form} onSubmit={sendEmail}>
                <Input for="user_name" nameLabel="Nom" type="text" name="user_name" placeholder="Entrer votre nom" />
                <Input for="user_email" nameLabel="Email" type="email" name="user_email" placeholder="Entrer votre email" />
                <label for="message" className='font-semibold text-1xl pt-6'>Message</label>
                <textarea className='bg-zinc-300 focus:bg-white outline-none text-black font-medium text-lg h-56 px-6 py-4 rounded-lg' id="message" name="message" placeholder='Entrer votre message' required />
                <input className='hover:bg-white hover:text-zinc-900 text-zinc-200 mx-auto font-medium text-xl w-32 p-3 mt-6 max-sm:bg-zinc-800 rounded-2xl' type="submit" value="Envoyer" />
            </form>
        </div>
    )
};

export default Contact;
