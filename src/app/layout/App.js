import React, { Component } from 'react';
import PersistentDrawer from '../../features/PersistentDrawer/PersistentDrawer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<PersistentDrawer />
				</div>
			</Router>
		);
	}
}

export default App;
