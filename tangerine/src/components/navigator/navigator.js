import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let minorContainerStyle = {
    /* Preparative */ 
    position: 'fixed',
    width: '300px',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'rgba (20, 20, 20, 0.7)',
    zIndex: 8,
    /* Flexbox */
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left'
}

let navigatorStyle = {
    width: '100%',
    background: '#265785',
    color: 'white'
}

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: null
        };
    }

    componentDidMount = () => {
        this.activateAnimation();
    }

    activateAnimation = () => {
        if (this.props.isVisible) {
            this.setState({
                class: 'animated shadow-lg slideOutLeft'
            })
            setTimeout(() => {
                minorContainerStyle.display = '0px';
                this.render();
            }, 800);
        } else {
            this.setState({
                class: 'animated shadow-lg slideInLeft'
            })
        }
    }

    render() {
        return (
            <div style={minorContainerStyle}>
                
                {/* BEGIN NAVIGATOR CONTENT */}

                <nav 
                    onClick={this.props.toggleVisibility_Navigator}
                    className={this.state.class} 
                    style={navigatorStyle}
                >
                    <div className='text-right p-3'>
                        <i class="fas fa-angle-double-left"></i>
                    </div>
                    <hr/>
                    <div>
                        <Link
                            to="/"
                            className='text-light pl-3'
                            // className={
                            // window.location.pathname === "/" 
                            //     ? "nav-link active" 
                            //     : "nav-link"
                            // }
                            >
                            Home
                        </Link>
                    </div>
                    <hr/>
                    <div>
                        <Link
                            to="/instances"
                            className='text-light pl-3'
                            // className={
                            // window.location.pathname === "/instances" 
                            //     ? "nav-link active" 
                            //     : "nav-link"
                            // }
                            >
                            Instances
                        </Link>
                    </div>
                    <hr/>
                    <div>
                        <Link
                            to="/analytics"
                            className='text-light pl-3'
                            // className={
                            // window.location.pathname === "/analytics"
                            //     ? "nav-link active"
                            //     : "nav-link"
                            // }
                        >
                            Analytics
                        </Link>
                    </div>
                    <hr/>
                </nav>

                {/* END NAVIGATOR CONTENT */}

            </div>
        );
    }
}

export default Navigator;