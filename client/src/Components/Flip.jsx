import React, { Component } from 'react'
import TextLoop from "react-text-loop";


 
export default class Flip extends Component {
    render() {
        return (
            <h3>
                My other skills include <br></br>
                <TextLoop>
                    <span className="z-10"> &nbsp; Customer Service</span>
                    <span> &nbsp; Cross Team Communications</span>
                    <span> &nbsp; Adobe Photoshop</span>
                    <span>&nbsp; Project Management</span>
                    <span>&nbsp; Program Management</span>
                    <span>&nbsp; Community Management</span>
                    <span>&nbsp; Research</span>
                    <span>&nbsp; Figma</span>
                    <span>&nbsp; Adobe XD</span>
                </TextLoop>{" "}
                
            </h3>
        );
    }
}


