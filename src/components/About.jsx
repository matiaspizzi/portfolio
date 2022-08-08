import React from 'react'
import Perfil from '../assets/perfil.png'

const About = () => {
  return (
      <div name="about" className="flex flex-col items-center pt-[200px] min-h-screen w-full bg-neutral-900  px-16 text-white border-b-[1px] border-zinc-500">
        <div className='max-w-[1000px]'>
            <div className='text-2xl max-w-[600px] flex flex-col justify-center items-left'>
              <p className='text-3xl font-bold'>Hi, my name is</p>
              <h1 className="text-6xl text-[#6cd0a7] font-black">Matias Pizzi</h1>
              <p >I'm a Full Stack junior developer based in Buenos Aires, Argentina.</p>
            </div>
          <div className='flex flex-col w-full h-full justify-center items-center gap-8 pt-10 sm:flex-row'>

            <div className='flex w-full h-full justify-center items-center gap-8'>
              <img src={Perfil} alt="" className='w-[200px] rounded-full border-[3px] border-rose-400 drop-shadow-[0_0_95px_rgba(155,155,155,0.8)]'/>
            </div>

            <p className='p-3 max-w-[700px] text-lg '>
              I'm 20 years old and started writing code a year and a half ago. 
              Now I'm looking for a part-time job while continuing with the career of computer engineering at university.
            </p>
          </div>
        </div>
      </div>
  )
}

export default About