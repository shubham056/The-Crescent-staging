import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 32.7936538, lng: -96.8061019}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;