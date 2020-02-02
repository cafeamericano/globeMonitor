import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';

import Graph from '../analytics/graph';
import Graph2 from '../analytics/graph2';

let instancesStyle = {
    backgroundColor: '#e3e3e3'
}

class Instances extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container-fluid p-5' style={instancesStyle}>
                <div className='row'>
                    <Common.Card 
                        title='Germany' 
                        key={0} 
                        content={<Graph2 regionCode='DE'/>}/>
                    <Common.Card 
                        title='United Kingdom' 
                        key={1} 
                        content={<Graph2 regionCode='GB'/>}/>
                    <Common.Card 
                        title='France' 
                        key={2} 
                        content={<Graph2 regionCode='FR'/>}/>
                </div>
            </div>
        );
    }
}

export default Instances;