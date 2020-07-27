import React, { Component } from 'react'
import Greedos from '../assets/Greedos.png'
import receipebox from '../assets/receipebox.png'
import Schmedium from '../assets/Schmedium.png'
import github from '../assets/github.svg'
import interweb from '../assets/interweb.svg'




export default class Projects extends Component {
    render() {
        return (
            <div className="items-center text-center ml-4 flex flex-wrap justify-between" >
                {/* project 1 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-2 ml-24">
                    <img class="w-full" src={Greedos} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <p class="text-gray-700 text-base">
                            Greedos is a intergalactic bounty board for aspiring and experienced bounty hunters across the galaxy. This website shows a list of star wars characters and the information on each of the characters including, eye color, weight, name and if their bounty worth.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">JavaScript</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">CSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">SWAPI-API</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Netlify</span>
                        <div className="flex flex-wrap justify-between">
                            <a><img src={github} className="h-6 w-6" /></a>
                            <a><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* Project 2 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                    <img class="w-full" src={receipebox} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <p class="text-gray-700 text-base">
                            This is a food recipe app that allows the user to select popular dishes based on meal type, country, cook time and follow a step by step guide to making a delicious meal. receipebox allows a user to find the receipes they love using a desktop, tablet or phone.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">MongoDB</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Express</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Heroku</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Surge</span>
                        <div className="flex flex-wrap justify-between">
                        <a><img src={github} className="h-6 w-6" /></a>
                        <a><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* project 3 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-2 ">
                    <img class="w-full" src={Schmedium} alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <p class="text-gray-700 text-base">
                            This application is a blog that is small, simple, and easy to use. Schmedium is a movie blog that can give you short,reliable and quick reviews of your favorite movies. Save time with your favorite movie series using Schmedium.
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
                            <a><img src={github} className="h-6 w-6" /></a>
                            <a><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>











            </div>
        )
    }
}
