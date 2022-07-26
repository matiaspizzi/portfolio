import React from 'react'
import Desarrollo from '../assets/certificado desarrollo.png'
import JS from '../assets/certificado js.png'
import ReactJS from '../assets/certificado react.png'
import Backend from '../assets/certificado backend.png'

const Certifications = () => {
    const certifications = [
        {
            name: 'Web Development',
            image: Desarrollo,
            hours: '38 hours'
        },
        {
            name: 'JavaScript',
            image: JS,
            hours: '32 hours'
        },
        {
            name: 'React Js',
            image: ReactJS,
            hours: '28 hours'
        },
        {
            name: 'Backend Programming',
            image: Backend,
            hours: '96 hours'
        }
    ]

    return (
        <div className='w-full grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2'>
            {certifications.map((cert) => (
                <div className='flex flex-col items-center justify-center'>
                    <p>{cert.name} - {cert.hours}</p>
                    <img src={cert.image} alt="" className='pt-2'/>
                </div>
            ))}
        </div>
    )
}

export default Certifications