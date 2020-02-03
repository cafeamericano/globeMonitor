import React, { Component } from 'react';
import * as Common from './common/_all';
import { Link } from 'react-router-dom';

class GenericComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default GenericComponent;
