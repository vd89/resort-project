import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import ErrorPage from './pages/ErrorPage';
import { Route, Switch } from 'react-router-dom';
import SingleRoom from './pages/SingleRoom';
import Layout from './pages/Components/Layout';
import "./App.css"

function App() {
	return (
		<>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/rooms/" component={Rooms} />
					<Route exact path="/rooms/:slug" component={SingleRoom} />
					<Route component={ErrorPage} />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
