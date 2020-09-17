import React, { Component } from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import postgresql from '../assets/postgresql.svg'
import react from '../assets/react.svg'
import ruby from '../assets/ruby.svg'
import rails from '../assets/rails.svg'
import mongodb from '../assets/mongodb.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import nodejs from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import heroku from '../assets/heroku.svg'
import Flip from '../Components/Flip'
import sass from '../assets/Sass.svg'
import git from '../assets/git.svg'



export default class About extends Component {
    render() {
        return (
            <div className="my-5 mx-auto max-w-xl shadow-md bg-white py-4 rounded-l-md rounded-r-lg ">
                
                <h1 className="text-center justify-content-center text-2xl text-black m-3 font-bold">Who is Colin Malcolm?</h1>
                
                <p className="text-center justify-content-center text-md text-black m-8 ">I am a software engineer with a focus on being a valuable and integral team member. I have a natural passion for technology and problem solving that motivates me to improve my skill set. My previous experience in tech has provided me with the work ethic and mindset to succeed in this ever-growing industry.</p><br></br>
                <div className="text-center text-lg"><Flip/></div>
                
                    <h1 className="text-center justify-content-center text-2xl text-black m-8">What are my Skills?</h1>

                    <div className="flex flex-wrap justify-content-evenly py-1 overflow-hidden ">
                    <img src={html} className="w-10 h-10 ml-4"/>
                    <img src={css} className="w-10 h-10 ml-4"/>
                    <img src={js} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={postgresql} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={react} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={ruby} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={rails} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={tailwindcss} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={nodejs} className="w-10 h-10 ml-4 mt-2" />
                    <img src={heroku} className="w-10 h-10 ml-1 mt-2"/>
                    <img src={express} className="w-10 h-13 ml-6 mr-1 mt-2"/>
                    <img src={mongodb} className="w-13 h-6 ml-4 mt-2"/>
                    <img src={sass} className="w-10 h-10 ml-4 mt-2"/>
                    <img src={git} className="w-10 h-10 ml-4 mt-2"/>

                    </div>
                
                
            </div>
        )
    }
}
