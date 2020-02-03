import React, { Component } from 'react';
import * as Common from './_all';
import { Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";

var contextMenuStyle = {
    background: 'white',
    border: '1px gray solid',
    padding: '10px',
  }

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

    doNothing = () => {
        console.log('did nothing')
    }

    render() {

        return (
            <div class={this.props.size || "col-xl-4 col-sm-6"}>
                <section className = {this.state.class}>
                        <div className='card mt-3 animated fadeInRight shadow'>
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