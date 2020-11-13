import React, { Component } from 'react'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import githubs from '../assets/githubs.svg'
import medium from '../assets/medium.svg'


export default class Footer extends Component {
    render() {
        return (
            <div className=" flex flex-wrap justify-content-evenly bg-black py-4 ">
               <a href ="https://github.com/malcolmc10" target="_blank"><img src={githubs} className="w-10 h-10 sm:w-5 h-5 ml-4"  /></a>
               <a href="https://twitter.com/Themalcolmmind" target="_blank"><img src={twitter} className="w-10 h-10 sm:w-5 h-5 ml-4" /></a>
               <a href ="https://www.linkedin.com/in/colinpmalcolm/" target="_blank"><img src={linkedin} className="w-10 h-10 sm:w-5 h-5 ml-4"  /></a>
               <a href ="https://medium.com/@colinmalcolm" target="_blank"><img src={medium} className=" w-10 h-10 sm:w-5 h-5 ml-4"  /></a>
            
            <p className="text-white ml-32 font-bold hidden sm:inline-block">© Colin Malcolm 2020</p>
            </div>
        )
    }
}