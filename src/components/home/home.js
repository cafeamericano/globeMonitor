import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';;

var homeStyle = {
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={homeStyle} className='animated fadeIn'>
                <div className='container-fluid bg-light'>
                    <h4 className='animated fadeInUp' style={bannerStyle}>Welcome.</h4>
                </div>
            </div>
        );
    }
}

export default Home;