import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div>
				<Map
					google={this.props.google}
					center={{lat: 32.793560, lng: -96.804039}}
					height='480px'
					zoom={16}
					propertyName='The Crescent'
				/>
			</div>
		);
	}
}

export default Home;