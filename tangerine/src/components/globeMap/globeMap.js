import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';

import Graph from './graph';

let globeMapStyle = {
    backgroundColor: '#81d4fa',
    height: '100%'
}
class GlobeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={globeMapStyle} className='container-fluid'>
                <div className='row animated fadeIn'>
                    <Graph/>
                </div>
            </div>
        );
    }
}

export default GlobeMap;