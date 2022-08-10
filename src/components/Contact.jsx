import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div name="contact" className="flex flex-col items-center h-fit w-full bg-neutral-900 py-10 px-16 text-white border-b-[1px] border-zinc-500">
            <div className='flex flex-col justify-center max-w-[1000px]'>
                <h1 className='text-3xl w-fit border-b-2 border-red-400 font-bold' >Contact</h1>
                <div className='h-full w-full flex flex-col justify-center items-center bg-neutral-900 text-white'>
                    <ContactForm />
                </div>
            </div>    
        </div>
    )
}

export default Contact