import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="fixed justify-between w-screen">
                <nav className="bg-black p-6 flex font-bold items-center justify-between text-white">

    <div>
    <a href="/"><span className="font-semibold text-xl tracking-tight mr-4 hidden sm:inline-block">Colin Malcolm</span></a>
  
  
  {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
    {/* <div className="text-sm lg:flex-grow"> */}
      <a href="#About" className=" font-bold  text-teal-400 hover:text-pink-400 mr-4 text-sm sm:text-base">
        Who Am I?
      </a>
      <a href="#Title" className=" font-bold text-yellow-400 hover:text-teal-400 mr-4 text-sm sm:text-base">
        Projects
      </a>
      <a href="https://pdfhost.io/v/pax7BNZQ6_Colin_Malcolm_SWE_Resume.pdf" className=" font-bold  text-pink-400 hover:text-indigo-400 text-sm sm:text-base">
        Resume
      </a>
      </div>
    {/* </div> */}
    <div>
      <a href="#MyForm" class="inline-block font-bold text-sm px-4 py-2 leading-none border rounded text-pink-400 border-teal-400 hover:border-pink-400 hover:text-teal-400 hover:bg-black text-xs sm:text-base">Contact Me</a>
    </div>
  {/* </div> */}
  
</nav>
</div>        
            </div>
        )
    }
}

