import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

function DownloadResume() {
  return (
    <div className='rounded-lg border-2 border-slate-500 p-6 border-dashed flex flex-col gap-3 justify-center align-center max-w-fit w-full mt-[100px]'>
        <p className='font-bold text-lg flex justify-center align-center'> See my resume!</p>
        <div className='flex flex-col sm:gap-4 gap-2 sm:flex-row justify-center items-center  w-full'>
              <button className="flex h-fit items-center hover:bg-[#0dd380] bg-[#6cd0a7] text-white font-bold py-2 px-4 rounded" onClick={() => {window.open('cv_Matias_pizzi(e).pdf');}}>
                English 
              </button>
            <p>or</p> 
            <button className="flex h-fit items-center hover:bg-[#0dd380] bg-[#6cd0a7] text-white font-bold py-2 px-4 rounded" onClick={() => {window.open('cv_Matias_pizzi.pdf');}}>Spanish</button>
        </div>
    </div>
  )
}

export default DownloadResume