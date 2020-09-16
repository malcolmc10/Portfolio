import React, { Component } from 'react'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import githubs from '../assets/githubs.svg'
import medium from '../assets/medium.svg'


export default class Footer extends Component {
    render() {
        return (
            <div className=" flex flex-wrap justify-content-evenly bg-black py-4 ">
               <a href ="https://github.com/malcolmc10"><img src={githubs} className="w-5 h-5 ml-4" /></a>
               <a href="https://twitter.com/Themalcolmmind"><img src={twitter} className="w-5 h-5 ml-4"/></a>
               <a href ="https://www.linkedin.com/in/colinpmalcolm/"><img src={linkedin} className="w-5 h-5 ml-4" /></a>
               <a href ="https://medium.com/@colinmalcolm"><img src={medium} className="w-5 h-5 ml-4" /></a>
            
            <p className="text-white ml-32 font-bold">© Colin Malcolm 2020</p>
            </div>
        )
    }
}