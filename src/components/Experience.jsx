import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css-3.png'
import JS from '../assets/js.png'
import ReactJS from '../assets/react.png'
import NodeJS from '../assets/node-js.png'
import MongoDB from '../assets/mongo.png'
import Firebase from '../assets/firebase.png'
import MySQL from '../assets/mysql-logo.png'
import Tailwind from '../assets/tailwindcss.png'
import GraphQl from '../assets/graphql.png'
import Git from '../assets/git.png'
import Sass from '../assets/sass.png'
import Express from '../assets/express.png'
import Socketio from '../assets/socketio.png'
import Python from '../assets/python.png'

const Experience = () => {
    const technologies = [ HTML, CSS, Sass, JS, Git, ReactJS, NodeJS, Express, Socketio, Python, MySQL, MongoDB, Firebase, Tailwind, GraphQl ]

  return (
    <div name="experience" className="flex flex-col items-center justify-center min-h-[400px] w-full bg-neutral-900 py-10 px-16 text-white border-b-[1px] border-zinc-500">
        <div className='max-w-[1000px]'>
            <h1 className='text-3xl w-fit border-b-2 border-red-400'>Experience</h1>
            <p className='p-[15px] text-lg'>I have worked with all of this technologies:</p>
            <p className='pt-4'> HTML5, CSS3, Sass, JavaScript, jQuery, Git, React Js, Node Js, Express Js, Pug, Ejs, Handlebars, Socket.io, Webpack, MySQL, Firebase, MongoDB, NGINX, Heroku, AWS, Twilio, OWASP, Mocha, Chai, GraphQl, Deno and other libraries.</p>
            <div className='w-full items-center justify-center'>
                <div className="w-full justify-center items-center grid lg:grid-cols-6 gap-8 p-16 md:grid-cols-4 sm:grid-cols-2">
                    {technologies.map((tech) => (
                        <img src={tech} alt="" className='w-[150px] rounded-mdz p-2 border-2 border-zinc-600'/>
                    ))}
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Experience