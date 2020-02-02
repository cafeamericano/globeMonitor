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

    let data = [
      ['Country',         'Population'  ],
      ['Base',            0             ],
      ['France',          65700000      ],
      ['United Kingdom',  70000000      ],
      ['Germany',         80000000      ],
      ['United States',   300000000     ]
    ]

    let options = {
      region: this.props.regionCode,
      backgroundColor: '#81d4fa',
      colorAxis: {colors: ['green']}
    };

    return (
      <div style={graphStyle}>
        <Chart
          chartType="GeoChart"
          data={data}
          options={options}
          width="100%"
          height="100%"
          legendToggle
        />
      </div>
    );
  }
}

export default Graph;
