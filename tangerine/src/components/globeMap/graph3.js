import React, { Component } from 'react';
// import * as Common from './common/_all';
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";

let graphStyle = {
    width: '100%',
}

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {

    let data = [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]

    let options = {
      pieHole: 0.4
    };

    return (
      <div style={graphStyle}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default Graph;
