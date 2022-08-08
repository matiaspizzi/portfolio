import React from 'react'
import FullStack from '../assets/certificado carrera.png'
import Slider from './Slider'

const Education = () => {

    return (
        <div name="education" className="flex flex-col items-center justify-center min-h-screen w-full bg-neutral-900 py-10 px-16 text-white border-b-[1px] border-zinc-500">
            <div className='max-w-[1000px]'>
                <h1 className='text-3xl w-fit border-b-2 border-red-400 font-bold' >Education</h1>
                <p className='pt-4 max-w-[400px] ml-[40px] text-slate-400'>I did the programming career at Coderhouse, finishing in the Top 10% of students, fulfilling all the deliveries and complying with all requirements. </p>
                <p className='p-[10px] pt-8 text-2xl'>Look some of my certifications:</p>
                <div className='flex flex-col w-full md:flex-row gap-4 items-center'>
                    <div className="w-full min-h-[200px] flex flex-col items-center justify-center">
                        <a className="w-full flex justify-center items-center" href="https://api-eks.coderhouse.com/certifications/62d9598e12ecb7001a165652/print?lang=es&v2=1" rel="noreferrer" target="_blank">
                            <img src={FullStack} className="md:w-full w-[90%]" alt="" />
                        </a>
                    </div>
                    <Slider />
                </div>
            </div>
                
        </div>
      )
}

export default Education