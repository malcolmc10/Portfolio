import React, { Component } from 'react'
import Greedos from '../assets/Greedos.png'
import receipebox from '../assets/receipebox.png'
import Schmedium from '../assets/Schmedium.png'
import github from '../assets/github.svg'
import interweb from '../assets/interweb.svg'
import Covid from '../assets/Covid.png'
import spotify from '../assets/Spotify.png'



export default class Projects extends Component {
    render() {
        return (
            <div className="items-center text-center  flex flex-wrap justify-evenly" >
                {/* project 1 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-0 mt-4 sm:mr-2 mt-4">
                    <a href="https://greedosbb.netlify.app/"><img class="w-full" src={Greedos} alt="Sunset in the mountains"></img></a>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Greedos</h1>
                        <p class="text-gray-700 text-base">
                            Greedos is a fun, engaging, intergalactic bounty board for aspiring and experienced bounty hunters across the universe. This website shows Star Wars wanted characters and the information on each including their name and their bounty.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">React</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">JavaScript</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">CSS</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">SWAPI-API</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 " >Netlify</span>
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/GreedosBB/blob/master/README.md"><img src={github} className="h-6 w-6" /></a>
                            <a href="https://greedosbb.netlify.app/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* Project 2 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-4 ">
                <a href="http://foodiesandgoodiesrecipebox.surge.sh/"><img class="w-full" src={receipebox} alt="Sunset in the mountains"></img></a>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">RecipeBox</h1>
                        <p class="text-gray-700 text-base">
                            This is a full CRUD food recipe app that allows the user to select popular dishes based on meal type, country, cook time and follow a step by step guide to making a delicious meal. recipebox allows a user to find the recipes they love using your devices.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">React</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">MongoDB</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">Express</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">Heroku</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">Surge</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">TailwindCSS</span>
                        <div className="flex flex-wrap justify-between">
                        <a href="https://github.com/malcolmc10/P3-recipebox/blob/dev/p3-worksheet.md"><img src={github} className="h-6 w-6" /></a>
                        <a href="http://foodiesandgoodiesrecipebox.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* project 3 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-0 mt-4 sm:ml-2 mt-4">
                <a href="http://schmediumpotter.surge.sh/"><img class="w-full" src={Schmedium} alt="Sunset in the mountains"></img></a>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Schmedium</h1>
                        <p class="text-gray-700 text-base">
                            This application is a blog that is small, simple, and easy to use. Schmedium is a movie blog that can give you short,reliable and quick reviews of your favorite movies. The app includes full CRUD and Authentication and styling with TailwindCSS.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">TailwindCSS</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Ruby on Rails</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">PostgreSQL</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Heroku</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Surge</span>
                        
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/Schmedium"><img src={github} className="h-6 w-6" /></a>
                            <a href="http://schmediumpotter.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>

                {/* Project 4 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-0 mt-4 sm:mr-2  mt-4">
                <a href="https://covid-country-e9bff.web.app/"><img class="w-full" src={Covid} alt="Sunset in the mountains"></img></a>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">COVID Country</h1>
                        <p class="text-gray-700 text-base">
                            Using the disease.sh API, Leaflet, and Material UI I created an interactive tool that allows the user to track the numbers of cases, recoveries, and deaths in countries all over the world using a line graph, bubbles, and charts.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Firebase</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Material UI</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Leaflet</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Chart.js</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Numeral</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">CSS</span>
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/Pandemic/blob/main/README.md"><img src={github} className="h-6 w-6" /></a>
                            <a href="https://covid-country-e9bff.web.app/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>

                </div>


                {/* project 5 */}

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-0 mt-4 sm:ml-2 mt-4">
                <a href="http://spotifyme.surge.sh/"><img class="w-full" src={spotify} alt="Sunset in the mountains"></img></a>
                    <div class="px-6 py-4">
                        <h1 className="font-bold">Spotify UI Clone</h1>
                        <p class="text-gray-700 text-base">
                            This application is a UI clone of the popular music streaming app Spotify. Using React, React Router, Javascript, and Sass I wanted to create something I loved but add features that make it my own. I hope you enjoy my passion project.
                </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Sass</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">JavaScript</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">HTML</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React Router</span>
                        <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700">Surge</span>
                        
                        <div className="flex flex-wrap justify-between">
                            <a href="https://github.com/malcolmc10/SpotifyMe"><img src={github} className="h-6 w-6" /></a>
                            <a href="http://spotifyme.surge.sh/"><img src={interweb} className="h-6 w-6" /></a>
                        </div>
                    </div>



                    {/* Project 6 */}

                    

                </div>





            </div>
        )
    }
}
