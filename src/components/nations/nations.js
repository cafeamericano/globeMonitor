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
                                <Graph2 
                                    regionName='Germany'
                                    regionCode='DE'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='United Kingdom' 
                        key={'UK'} 
                        content={
                            <Link to='/nation/GB/United_Kingdom'>
                                <Graph2 
                                    regionName='United Kingdom'
                                    regionCode='GB'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='France' 
                        key={'FR'}
                        url='/nation/FR/France'
                        content={
                            <Link to='/nation/FR/France'>
                                <Graph2 
                                    regionName='France'
                                    regionCode='FR'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='Spain' 
                        key={'ES'}
                        url='/nation/ES/Spain'
                        content={
                            <Link to='/nation/ES/Spain'>
                                <Graph2 
                                    regionName='Spain'
                                    regionCode='ES'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='Japan' 
                        key={'JP'}
                        url='/nation/JP/Japan'
                        content={
                            <Link to='/nation/JP/Japan'>
                                <Graph2 
                                    regionName='Japan'
                                    regionCode='JP'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='United States' 
                        key={'US'} 
                        content={
                            <Link to='/nation/US/United_States'>
                                <Graph2 
                                    regionName='United States'
                                    regionCode='US'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='United Kingdom' 
                        key={'UK'} 
                        content={
                            <Link to='/nation/GB/United_Kingdom'>
                                <Graph2 
                                    regionName='United Kingdom'
                                    regionCode='GB'/>
                            </Link>
                        }/>
                    <Common.Card 
                        title='Spain' 
                        key={'ES'}
                        url='/nation/ES/Spain'
                        content={
                            <Link to='/nation/ES/Spain'>
                                <Graph2 
                                    regionName='Spain'
                                    regionCode='ES'/>
                            </Link>
                        }/>
                </div>
            </div>
        );
    }
}

export default Nations;