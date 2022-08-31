import React from 'react'
import certificadoDesarrollo from '../assets/certificado desarrollo.png'
import certificadoJS from '../assets/certificado js.png'
import certificadoReactJS from '../assets/certificado react.png'
import certificadoBackend from '../assets/certificado backend.png'
import certificadoDesarrolloTel from '../assets/certificado desarrollo telefonica.png'
import certificadoJSTel from '../assets/certificado js telefonica.png'

const featuredProducts = [
    certificadoBackend,
    certificadoReactJS,
    certificadoJS,
    certificadoDesarrollo,
    certificadoJSTel,
    certificadoDesarrolloTel
];

const Scroll = () => {
  return (
    <div className='flex justify-center py-20'>
        <div className='cursor-grab bg-[#252525] h-fit md:w-[65%] gap-8 w-full flex snap-x snap-mandatory overflow-x-auto p-4 pb-6 shadow-inner scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-slate-700'>
            {featuredProducts.map((product, index) => (
                <div className='snap-center shrink-0 first:md:pl-10 '>
                    <img src={product} key={index} alt="" className='shrink-0 w-64 sm:w-72 md:w-96 ' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Scroll