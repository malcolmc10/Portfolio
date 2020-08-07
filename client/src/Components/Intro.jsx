import Hello from '../assets/Hello.jpg'
import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
              <img src={Hello}></img>

            </div>
          )
        }
}

