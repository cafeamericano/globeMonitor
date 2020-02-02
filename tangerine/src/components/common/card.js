import React, { Component } from 'react';
import * as Common from './_all';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: null,
            isInflated: false
        };
    }

    toggleInflation = () => {
        if (this.state.isInflated) {
            this.setState({
                isInflated: false,
                class: null
            })
        } else {
            this.setState({
                isInflated: true,
                class: 'animated pulse'
            })
        }
    }
    render() {
        return (
            <div class="col-xl-4 col-sm-6">
                <section 
                    onMouseEnter={this.toggleInflation} 
                    onMouseLeave={this.toggleInflation} 
                    className = {this.state.class}>
                    <div className='card mt-3 animated fadeInUp shadow'>
                        <div class="card-header">
                            {this.props.title}
                        </div>
                        <div class="card-body p-0">
                            {this.props.content}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Card;