import React from 'react'
import Technologies from './Technologies'


const Experience = () => {

  return (
    <div name="experience" className="flex flex-col items-center justify-center min-h-[400px] w-full bg-neutral-900 py-10 px-16 text-white border-b-[1px] border-zinc-500">
        <div className='max-w-[1000px]'>
            <h1 className='text-3xl w-fit border-b-2 border-red-400 font-bold'>Experience</h1>
            <p className='p-[15px] text-lg text-slate-400'>I have worked with all of this technologies:</p>
            <p className='pt-4 '> HTML5, CSS3, Sass, JavaScript, jQuery, Git, React Js, Node Js, Express Js, Pug, Ejs, Handlebars, Socket.io, Webpack, MySQL, Firebase, MongoDB, NGINX, Heroku, AWS, Twilio, OWASP, Mocha, Chai, GraphQl, Deno and other libraries.</p>
            <div className='w-full flex items-center justify-center'>
                <Technologies />
            </div>
        </div>
            
    </div>
  )
}

export default Experience