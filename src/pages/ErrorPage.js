import React from 'react';
import {  MDBBtn, MDBIcon } from 'mdbreact';
import JumbotronPage from './Components/JumbotronPage';
import {Link} from "react-router-dom"
export default function ErrorPage() {
	return (
		<JumbotronPage
			title="404"
			subTitle="Page Not Found"
		>
			<Link to='/'>
				<MDBBtn outline
				color=""	className="mb-5 blue-gradient">
					<MDBIcon icon="clone" className="mr-2"></MDBIcon>Our Rooms
			</MDBBtn>
			</Link>

		</JumbotronPage>
	);
}
