import React from 'react'
import Desarrollo from '../assets/certificado desarrollo.png'
import JS from '../assets/certificado js.png'
import ReactJS from '../assets/certificado react.png'
import Backend from '../assets/certificado backend.png'

const Certifications = () => {
    const certifications = [
        {
            name: 'Backend Programming',
            image: Backend,
            hours: '96 hours',
            link: 'https://api-eks.coderhouse.com/certifications/62d7888671103300193fa2df/print?lang=es&v2=1'
        },
        {
            name: 'Web Development',
            image: Desarrollo,
            hours: '38 hours',
            link: 'https://api-eks.coderhouse.com/certifications/612422df15a1ed0011fdf7e1/print?lang=es&v2=1'
        },
        {
            name: 'JavaScript',
            image: JS,
            hours: '32 hours',
            link: 'https://api-eks.coderhouse.com/certifications/6179fdd5b777c00028479492/print?lang=es&v2=1'
        },
        {
            name: 'React Js',
            image: ReactJS,
            hours: '28 hours',
            link: 'https://api-eks.coderhouse.com/certifications/61de06dba04b910038764df5/print?lang=es&v2=1'
        }
    ]

    return (
        <div className='w-full grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2'>
            {certifications.map((cert) => (
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-bold text-slate-300'>{cert.name} - {cert.hours}</p>
                    <a href={cert.link} rel="noreferrer" target="_blank">
                        <img src={cert.image} alt="" className='pt-2'/>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Certifications