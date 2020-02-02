import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let minorContainerStyle = {
    /* Preparative */ 
    position: 'fixed',
    width: '100%',
    height: '40px',
    top: '0px',
    left: '0px',
    background: 'rgba (20, 20, 20, 0.7)',
    zIndex: 7,
    /* Flexbox */
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
}

let headerStyle = {
    width: '100%',
    background: '#265785',
    color: 'white'
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'animated slideInLeft',
            iconClass: 'fas fa-bars fa-lg text-light'
        };
    }

    handleMouseOver = () => {
        this.setState({
            iconClass: 'fas fa-bars fa-lg text-secondary'
        })
    }

    handleMouseOut = () => {
        this.setState({
            iconClass: 'fas fa-bars fa-lg text-light'
        })
    }

    render() {
        return (
            <div style={minorContainerStyle}>
                
                {/* BEGIN HEADER CONTENT */}

                <header 
                    onClick={this.props.toggleVisibility_Navigator}
                    style={headerStyle}
                    className='row p-2 m-0'
                >
                    <div className='col-6 text-left'>
                        <i class="fas fa-globe-europe mr-1"></i>
                        WORLDAPP
                    </div>
                    <div className='col-6 text-right'>
                        <i 
                            class={this.state.iconClass}
                            onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}
                        ></i>
                    </div>


                </header>

                {/* END HEADER CONTENT */}

            </div>
        );
    }
}

export default Header;