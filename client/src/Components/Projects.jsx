import React, { Component } from 'react'
import Greedos from '../assets/Greedos.png'
import receipebox from '../assets/receipebox.png'
import Schmedium from '../assets/Schmedium.png'
import github from '../assets/github.svg'
import interweb from '../assets/interweb.svg'
import CPM from '../assets/CPM.png'



export default class Projects extends Component {
    render() {
        return (
            <div className="items-center text-center ml-4 flex flex-wrap justify-between" >
                {/* project 1 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-2 ml-24">
                    <img class="w-full" src={Greedos} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Greedos</h1>
                        <p class="text-gray-700 text-base">
                            Greedos is an intergalactic bounty board for aspiring and experienced bounty hunters across the galaxy. This website shows a list of star wars characters and the information on each of the characters including, eye color, weight, name and their bounty.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">JavaScript</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">CSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">SWAPI-API</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Netlify</span>
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/GreedosBB/blob/master/README.md"><img src={github} className="h-6 w-6" /></a>
                            <a href="https://greedosbb.netlify.app/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* Project 2 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                    <img class="w-full" src={receipebox} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">RecipeBox</h1>
                        <p class="text-gray-700 text-base">
                            This is a full CRUD food recipe app that allows the user to select popular dishes based on meal type, country, cook time and follow a step by step guide to making a delicious meal. recipebox allows a user to find the recipes they love using your devices.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">MongoDB</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Express</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Heroku</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Surge</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">TailwindCSS</span>
                        <div className="flex flex-wrap justify-between">
                        <a href="https://github.com/malcolmc10/P3-recipebox/blob/dev/p3-worksheet.md"><img src={github} className="h-6 w-6" /></a>
                        <a href="http://foodiesandgoodiesrecipebox.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* project 3 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-2 mr-8">
                    <img class="w-full" src={Schmedium} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Schmedium</h1>
                        <p class="text-gray-700 text-base">
                            This application is a blog that is small, simple, and easy to use. Schmedium is a movie blog that can give you short,reliable and quick reviews of your favorite movies. The app includes full CRUD and Authenticationand styling with TailwindCSS.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">TailwindCSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Ruby on Rails</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">PostgreSQL</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Heroku</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Surge</span>
                        
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/Schmedium"><img src={github} className="h-6 w-6" /></a>
                            <a href="http://schmediumpotter.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>

                {/* Project 4 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-2 ml-24 mt-4">
                    <img class="w-full" src={CPM} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Colin's Portfolio</h1>
                        <p class="text-gray-700 text-base">
                            Using React I created a fun, personalized portfolio. In this portfolio you will find my passion projects, resume, and a bit of personality. Using TailwindCSS I designed my portfolio to be inviting and easy to navigate between sections.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Surge</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">TailwindCSS</span>
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/Portfolio"><img src={github} className="h-6 w-6" /></a>
                            <a href="http://iamcolinmalcolm.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>









            </div>
        )
    }
}
