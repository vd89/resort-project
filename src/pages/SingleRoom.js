import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import JumbotronPage from '../Components/JumbotronPage';
import { Link } from 'react-router-dom';

export default class SingleRoom extends Component {
	render() {
		return (
			<JumbotronPage title=" this are the detials of the primary rooms">
				<Link to="/">
					<MDBBtn outline color="" className="mb-5 blue-gradient ">
						<MDBIcon icon="clone" className="mr-2"></MDBIcon>Return Home
					</MDBBtn>
				</Link>
			</JumbotronPage>
		);
	}
}
