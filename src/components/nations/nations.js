import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';

import Graph from '../globeMap/graph';
import Graph2 from '../globeMap/graph2';

let nationsStyle = {
    backgroundColor: '#eLeft3e3e3',
    height: '100%'
}

class Nations extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container-fluid p-5' style={nationsStyle}>
                <div className='row'>
                    <Common.Card 
                        title='Germany' 
                        key={'DE'} 
                        content={
                            <Link to='/nation/DE/Germany'>
                                <Graph2 regionCode='DE'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='United Kingdom' 
                        key={1} 
                        content={
                            <Link to='/nation/GB/United_Kingdom'>
                                <Graph2 regionCode='GB'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='France' 
                        key={2}
                        url='/nation/FR/France'
                        content={
                            <Link to='/nation/FR/France'>
                                <Graph2 regionCode='FR'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='United States' 
                        key={0} 
                        content={
                            <Link to='/nation/US/United_States'>
                                <Graph2 regionCode='US'/>
                            </Link>
                        }/>
                </div>
            </div>
        );
    }
}

export default Nations;