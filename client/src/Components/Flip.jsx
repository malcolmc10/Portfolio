import React, { Component } from 'react'
import TextLoop from "react-text-loop";


 
export default class Flip extends Component {
    render() {
        return (
            <h3>
                When I am not coding I am <br></br>
                <TextLoop>
                    <span className=""> &nbsp; playing soccer ⚽️</span>
                    <span> &nbsp; spending time with my family 👩🏽‍🤝‍👨🏻</span>
                    <span>  &nbsp; playing video games 🎮</span>
                    <span> &nbsp; eatting 🍽</span>
                    <span>&nbsp; exercising 🏋🏻‍♂️</span>
                </TextLoop>{" "}
                
            </h3>
        );
    }
}