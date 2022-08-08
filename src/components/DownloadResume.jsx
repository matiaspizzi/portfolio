import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

function DownloadResume() {
  return (
    <div className='rounded-lg border-2 border-slate-500 p-6 border-dashed flex flex-col gap-3 justify-center align-center max-w-fit mt-[100px]'>
        <p className='font-bold text-lg flex justify-center align-center'> Download my resume!</p>
        <div className='flex flex-row gap-4 justify-center align-center max-w-fit'>
            <a className="flex flex-col" href="cv_Matias_pizzi(e).pdf" download='cv_Matias_pizzi(e).pdf'>
                <button className="flex h-fit items-center hover:bg-[#0dd380] bg-[#6cd0a7] text-white font-bold py-2 px-4 rounded">
                <FaFileDownload className='h-5 mr-2'/><p> English</p> 
                </button>
            </a>
            <p>or</p> 
            <a className="flex flex-col" href="cv_Matias_pizzi.pdf" download="cv_Matias_pizzi.pdf">
                <button className="flex h-fit items-center hover:bg-[#0dd380] bg-[#6cd0a7] text-white font-bold py-2 px-4 rounded">
                <FaFileDownload className='h-5 mr-2'/>Spanish 
                </button>
            </a>
        </div>
    </div>
  )
}

export default DownloadResume