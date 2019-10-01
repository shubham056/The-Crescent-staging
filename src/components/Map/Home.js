import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div>
				<Map
					google={this.props.google}
					center={{lat: 32.7943373, lng: -96.8040556}}
					height='480px'
					zoom={16}
				/>
			</div>
		);
	}
}

export default Home;