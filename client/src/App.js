import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './tailwind.output.css';
import About from './Components/About';
import Colins from './assets/Colins.png'
import Projects from './Components/Projects'
import Title from './Components/Title'
import MyForm from './Components/Contact'
import Intro from './Components/Intro'
import Flip from './Components/Flip'

export default class App extends Component {
  render() {
    return (
      <div>

        <div className="mb-1 .absolute ">
          <Header />
        </div>

        <div>

        <Intro/>

        </div>

        <div className="bg-teal-400 py-4 flex justify-center mt-1" id="About">
        
          <About />
          
          
        </div>


        <div className="py-8 bg-yellow-400 flex flex-wrap mt-1 justify-center">
          <Title />
        </div>


        <div className="py-8 bg-yellow-400 flex flex-wrap" id="Projects">

          <Projects />
        </div>

        <div className="bg-pink-400 py-32 mt-1 flex justify-center" id="MyForm">
          <MyForm/>
          <img src={Colins} className="h-56"></img>
        </div>



        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}

