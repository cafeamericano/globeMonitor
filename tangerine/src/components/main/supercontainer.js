import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../home/home';
import Analytics from '../analytics/analytics';
import Instances from '../instances/instances';
import Navigator from '../navigator/navigator'
import Header from './header'

let supercontainerStyle = {
    position: 'relative',
	width: '100%',
	height: '100%'
}

class Supercontainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isVisible_Navigator: false
		};
	}

	toggleVisibility_Navigator = () => {
		if (this.state.isVisible_Navigator) {
			this.setState({isVisible_Navigator: false});
		} else {
			this.setState({isVisible_Navigator: true});
		}
	}

	render() {
		return (
			<div style={supercontainerStyle}>
				<Router>
					<Header
						toggleVisibility_Navigator={this.toggleVisibility_Navigator}
					/>
					<Navigator 
						isVisible={this.state.isVisible_Navigator}
						key={this.state.isVisible_Navigator}
						toggleVisibility_Navigator={this.toggleVisibility_Navigator}
					/>
					<Route exact path="/" component={Home} />
					<Route exact path="/analytics" component={Analytics} />
					<Route exact path="/instances" component={Instances} />
				</Router>
			</div>
		);
  }

}

export default Supercontainer;