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

    const data = [
      ["Year", "Visitations", { role: "style" }],
      ["2010", 10, "color: gray"],
      ["2020", 14, "color: #76A7FA"],
      ["2030", 16, "color: blue"],
      ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
      [
        "2050",
        28,
        "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
      ]
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
          chartType="BarChart"
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
