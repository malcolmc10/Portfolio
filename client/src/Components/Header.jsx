import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="fixed justify-between w-screen z-50">
                <nav className="bg-black p-6 flex font-bold items-center justify-between text-white">

    <div>
    <a href="/"><span className="font-semibold text-xl tracking-tight mr-4 hidden sm:inline-block">Colin Malcolm</span></a>
  
  
  
      <a href="#About" className=" font-bold  text-teal-400 hover:text-pink-400 mr-4 text-xs sm:text-base">
        Who Am I?
      </a>
      <a href="#Title" className=" font-bold text-yellow-400 hover:text-teal-400 mr-4 text-xs sm:text-base">
        Projects
      </a>
      <a href="https://pdfhost.io/v/g086dRiMN_Colin_Malcolm_Engineering_Resume_Google_Docspdf.pdf" target="_blank" className=" font-bold  text-pink-400 hover:text-indigo-400 text-xs sm:text-base">
        Resume
      </a>
      </div>
    
    <div>
      <a href="#MyForm" class="inline-block font-bold text-sm px-4 py-2 leading-none border rounded text-pink-400 border-teal-400 hover:border-pink-400 hover:text-teal-400 hover:bg-black text-xs sm:text-base">Contact Me</a>
    </div>
  
  
</nav>
</div>        
            </div>
        )
    }
}

