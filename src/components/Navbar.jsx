import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202020ef] text-gray-400">
      <div className='cursor-pointer'>
        <Link to="about" smooth={true} duration={500} offset={-80} ><img src={Logo} className="w-[150px]" alt="" /></Link>
      </div>

      <ul className="hidden md:flex gap-10 text-[#9fc2b4]">
        <li className="py-6 text-xl">
          <Link to="experience" smooth={true} duration={500} offset={-80} >Experience</Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="education" smooth={true} duration={500} offset={-80} >Education</Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="contact" smooth={true} duration={500} offset={-80} >Contact</Link>
        </li>
      </ul>

      <div className="md:hidden z-10 cursor-pointer" onClick={toggleNav}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#202020] flex flex-col justify-center items-center"}>
        <li className="py-6 text-3xl">
          <Link to="experience" onClick={toggleNav} smooth={true} duration={500} offset={-80} >Experience</Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="education" onClick={toggleNav} smooth={true} duration={500} offset={-80} >Education</Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="contact" onClick={toggleNav} smooth={true} duration={500} offset={-80} >Contact</Link>
        </li>
      </ul>

      <div className={nav ? "hidden" : 'flex fixed flex-col top-[40%] left-0 text-white text-xl'}>
        <ul>
          <li className='pl-[15px] w-[150px] h-[40px] ml-[-110px] hover:ml-0 duration-500 bg-blue-500'>
            <a className='flex items-center justify-between h-full pr-[5px]' href="https://www.linkedin.com/in/matiasnahuelpizzi/">
              LinkedIn <FaLinkedin className="text-3xl" />
            </a>
          </li>
          <li className='pl-[15px] w-[150px] h-[40px] ml-[-110px] hover:ml-0 duration-500 bg-slate-600 '>
            <a className='flex items-center justify-between h-full pr-[5px]' href="https://github.com/ron2452">
              GitHub <FaGithub className="text-3xl" />
            </a>
          </li>
          <li className='pl-[15px] w-[150px] h-[40px] ml-[-110px] hover:ml-0 duration-500 bg-rose-400'>
            <a className='flex items-center justify-between h-full pr-[5px]' href="https://www.instagram.com/mato.pizzi/">
              Instagram <FaInstagram className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar