import React, { Component } from 'react';
import * as Common from '../common/_all';
import { Link } from 'react-router-dom';

import Graph from '../globeMap/graph';
import Graph2 from '../globeMap/graph2';
import Graph3 from '../globeMap/graph3';
import LineGraph from '../globeMap/lineGraph';
import BarGraph from '../globeMap/barGraph';
import DiffGraph from '../globeMap/diffGraph';
import BubbleGraph from '../globeMap/bubbleGraph';

let nationPageStyle = {
    backgroundColor: '#e3e3e3',
    height: '100%'
}

class NationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log(this.props.location)
        // console.log(this.props.match)

        var x = this.props.match.params.nationName
        var y = []

        for (var i = 0; i < x.length; i++) {
            if (x[i] !== '_') {
                y.push(x[i]);
            } else {
                y.push(' ')
            }
        }

        return (
            <div className='container-fluid p-5 animated fadeInRight' style={nationPageStyle}>
                <h3 className='mt-3'>Data for {y}</h3>
                <hr/>
                <div className='row'>
                    <Common.Card 
                        title='GDP'
                        size='col-xl-12 col-s-12'
                        key={0} 
                        content={
                            <LineGraph/>
                    }/>
                    <Common.Card 
                        title='GDP'
                        size='col-xl-8 col-s-12'
                        key={0} 
                        content={
                            <BarGraph/>
                    }/>
                    <Common.Card 
                        title='GDP'
                        size='col-xl-4 col-s-12'
                        key={0} 
                        content={
                            <DiffGraph/>
                    }/>
                    <Common.Card 
                        title='GDP'
                        size='col-xl-4 col-s-12'
                        key={0} 
                        content={
                            <Graph3/>
                    }/>
                    <Common.Card 
                        title='GDP' 
                        size='col-xl-8 col-s-12'
                        key={0} 
                        content={
                            <BubbleGraph/>
                    }/>
                </div>
            </div>
        );
    }
}

export default NationPage;