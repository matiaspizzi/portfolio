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

const Technologies = () => {
    const technologies = [HTML, CSS, Sass, JS, Git, ReactJS, NodeJS, Express, Socketio, Python, MySQL, MongoDB, Firebase, Tailwind, GraphQl]

    return (
        <div className="grid justify-center items-center gap-8 lg:grid-cols-6 p-16 md:grid-cols-4 grid-cols-2 ">
            {technologies.map((tech) => (
                <img src={tech} key={tech} alt="" className=' rounded-mdz p-3  bg-zinc-800 max-w-[110px] rounded-md' />
            ))}
        </div>
    )
}

export default Technologies