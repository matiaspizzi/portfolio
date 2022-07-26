import React from 'react'
import Perfil from '../assets/perfil.png'

const About = () => {
  return (
      <div name="about" className="flex flex-col items-center justify-center min-h-[400px] w-full bg-neutral-900 pt-44 pb-20 px-16 text-white border-b-[1px] border-zinc-500">
        <div className='max-w-[1000px]'>
            <div className='text-2xl max-w-[600px] flex flex-col justify-center items-left'>
              <p className='text-3xl'>Hi, my name is</p>
              <h1 className="text-6xl text-[#6cd0a7]">Matias Pizzi</h1>
              I'm a Full Stack junior developer based in Buenos Aires, Argentina.
            </div>
          <div className='flex flex-col w-full h-full justify-center items-center gap-8 pt-10 sm:flex-row'>

            <div className='flex w-full h-full justify-center items-center gap-8'>
              <img src={Perfil} alt="" className='w-[200px] rounded-full border-[3px] border-rose-400'/>
            </div>

            <p className='pt-3 max-w-[700px] text-lg'>
              I'm 20 years old and started writing code a year and a half ago. 
              Now I'm looking for a part-time job while continuing with the career of computer engineering at university.
            </p>
          </div>

          

        </div>
      </div>
  )
}

export default About