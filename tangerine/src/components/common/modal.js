import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let minorContainerStyle = {
    /* Preparative */ 
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'rgba (20, 20, 20, 0.7)',
    zIndex: 8,
    /* Flexbox */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

let modalWindowStyle = {
    background: 'silver',
    width: '500px',
    height: '350px',
    borderRadius: '10px',
    zIndex: 9
}


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={minorContainerStyle}>
                
                {/* BEGIN MODAL CONTENT */}

                <div className='animated fadeInDown' style={modalWindowStyle}>
                    Hello, world.
                </div>

                {/* END MODAL CONTENT */}

            </div>
        );
    }
}

export default Modal;