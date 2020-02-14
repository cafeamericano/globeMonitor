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

  componentDidMount = () => {
    this.pullAllWorldData();
  }

  pullAllWorldData = () => {
    let url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
        .then(response => response.json())
        .then(response => {

          var populationArr = response.map(function (country) {
            return [`${country.alpha2Code}`, country.population]
          })
          populationArr.unshift(['Country', 'Popularity'])

          this.setState({
              globalPopulations: populationArr,
              allWorldData: response
          });
          
        })
  }

  render = () => {

    return (
      <div style={graphStyle}>
        <Chart
          chartType="GeoChart"
          data={this.state.globalPopulations}
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
