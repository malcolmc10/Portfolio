import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="fixed justify-between w-screen">
                <nav className="flex items-center justify-between flex-wrap bg-black p-6">
  <div class="flex font-bold items-center flex-shrink-0 text-white mr-6" >
    <span className="font-semibold text-xl tracking-tight">Colin Malcolm</span>
  </div>
  <div className="block lg:hidden" >
    {/* <button className="flex items-center font-bold px-3 py-2 border rounded text-white border-gray-200 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button> */}
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#About" className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-400 hover:text-pink-400 mr-4 ">
        Who Am I?
      </a>
      <a href="#Projects" className="block mt-4 font-bold lg:inline-block lg:mt-0 text-yellow-400 hover:text-teal-400 mr-4">
        Projects
      </a>
      <a href="https://pdfhost.io/v/vSstWo7wt_Black_Photo_Resume.pdf" className="block mt-4 font-bold lg:inline-block lg:mt-0 text-pink-400 hover:text-indigo-400">
        Resume
      </a>
    </div>
    <div>
      <a href="#MyForm" class="inline-block font-bold text-sm px-4 py-2 leading-none border rounded text-pink-400 border-teal-400 hover:border-pink-400 hover:text-teal-400 hover:bg-black mt-4 lg:mt-0">Contact Me</a>
    </div>
  </div>
</nav>
</div>        
            </div>
        )
    }
}

