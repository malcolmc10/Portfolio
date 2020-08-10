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



export default class About extends Component {
    render() {
        return (
            <div className="my-5 mx-auto max-w-xl shadow-md bg-white py-4 rounded-l-md rounded-r-lg ">
                
                <h1 className="text-center justify-content-center text-2xl text-black m-3 font-bold">Who is Colin Malcolm?</h1>
                
                <p className="text-center justify-content-center text-md text-black m-8 ">I am a software engineer with a focus on being a valuable and integral team member. I have a natural passion for technology and problem solving that motivates me to improve my skill set. My previous experience in tech has provided me with the work ethic and mindset to succeed in this ever-growing industry.</p><br></br>
                <div className="text-center text-lg"><Flip/></div>
                
                    <h1 className="text-center justify-content-center text-2xl text-black m-8">What are my Skills?</h1>

                    <div className="flex flex-wrap justify-content-evenly py-1 overflow-hidden ">
                    <img src={html} className="w-8 h-8 ml-1"/>
                    <img src={css} className="w-8 h-8 ml-4"/>
                    <img src={js} className="w-8 h-8 ml-4"/>
                    <img src={postgresql} className="w-8 h-8 ml-4"/>
                    <img src={react} className="w-8 h-8 ml-4"/>
                    <img src={ruby} className="w-8 h-8 ml-4"/>
                    <img src={rails} className="w-8 h-8 ml-4"/>
                    <img src={mongodb} className="w-8 h-8 ml-4"/>
                    <img src={tailwindcss} className="w-8 h-8 ml-4"/>
                    <img src={nodejs} className="w-8 h-8 ml-4"/>
                    <img src={heroku} className="w-8 h-8 ml-4"/>
                    <img src={express} className="w-8 h-8 ml-4 mr-1"/>

                    </div>
                
                
            </div>
        )
    }
}
