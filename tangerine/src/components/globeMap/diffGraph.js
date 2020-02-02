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

    const datasetOld = [["x", "y"], [1, 1000], [2, 1170], [3, 660], [4, 1030]];

    const datasetNew = [
      ["x", "y"],
      [1.1, 1100],
      [2.1, 1000],
      [2.8, 960],
      [4.4, 1300]
    ];

      const options = {
        // chart: {
        //   title: "Company Performance",
        //   subtitle: "Sales & Expenses"
        // }
      };

    return (
      <div style={graphStyle}>
        <Chart
          chartType="ScatterChart"
          diffdata={{ old: datasetOld, new: datasetNew }}
          options={options}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default Graph;
