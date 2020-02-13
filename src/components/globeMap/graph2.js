import React, { Component } from 'react';
// import * as Common from './common/_all';
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

let graphStyle = {
    width: '100%'
}

var contextMenuStyle = {
  background: 'white',
  border: '1px gray solid',
  padding: '10px',
  borderRadius: '10px',
  zIndex: '99'
}

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount = () => {
      this.grabNationData();
    }

    grabNationData() {
        let url = `https://restcountries.eu/rest/v2/alpha/${this.props.regionCode}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    nationData: response
                });
            });
    }

    render() {

      let options = {
        region: this.props.regionCode,
        backgroundColor: '#81d4fa',
        colorAxis: {colors: ['green']}
      };

      //If nation data exists, use that info in the chart; otherwise, set null
      let presentableData = [];
      presentableData.push(['Country', 'Population'])
      this.state.nationData ? data.push([this.props.regionName, this.state.nationData.population]) : null;

      return (
        <div style={graphStyle}>
            
              <Chart
                chartType="GeoChart"
                data={presentableData}
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
