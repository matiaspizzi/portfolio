import React from 'react'
import FullStack from '../assets/certificado carrera.png'
import Certifications from './Certifications'

const Education = () => {

    return (
        <div name="education" className="flex flex-col items-center justify-center min-h-[400px] w-full bg-neutral-900 py-10 px-16 text-white border-b-[1px] border-zinc-500">
            <div className='max-w-[1000px]'>
                <h1 className='text-3xl w-fit border-b-2 border-red-400'>Education</h1>
                <p className='pt-4 max-w-[400px] ml-[40px]'>I did the programming career at Coderhouse, finishing in the Top 10% of students, fulfilling all the deliveries and complying with all requirements. </p>
                <p className='p-[10px] pt-14 text-2xl'>Look some of my certifications:</p>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className="w-full sm:max-w-[750px] pt-4">
                        <div className="w-full min-h-[200px] flex flex-col items-center">
                            <p>Full Stack Development Career</p>
                            <img src={FullStack} className="w-full pt-2" alt="" />
                        </div>
                    </div>
                    <Certifications />
                </div>
            </div>
                
        </div>
      )
}

export default Education