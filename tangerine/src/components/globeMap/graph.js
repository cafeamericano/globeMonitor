import React, { Component } from 'react';
// import * as Common from './common/_all';
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";

let graphStyle = {
    width: '100%'
}

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {

    return (
      <div style={graphStyle}>
        <Chart
          chartType="GeoChart"
          data={
            [
              ['Country', 'Popularity'],
              ['Germany', 200],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600],
              ['RU', 700]
            ]
          }
          options={
            {
              regionCode: 'this.props.regionCode',
              backgroundColor: '#81d4fa'
            }
          }
          width="100%"
          height="100%"
          legendToggle
        />
      </div>
    );
  }
}

export default Graph;
