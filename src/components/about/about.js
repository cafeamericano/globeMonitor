import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';;

var aboutStyle = {
    height: '100%',
    backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: 'cover'
}

var bannerStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '100px',
    fontWeight: '900',
    fontSize: '80px',
    color: 'white'
}

let minorContainerStyle = {
    /* Preparative */ 
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'rgba (20, 20, 20, 0.7)',
    // zIndex: 8,
    /* Flexbox */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={minorContainerStyle}>
                <h4 className='animated fadeInRight'>©2020 Matthew Farmer</h4>
            </div>
        );
    }
}

export default About;