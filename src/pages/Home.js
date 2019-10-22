import React from 'react';
import JumbotronPage from './Components/JumbotronPage';
import {Link} from 'react-router-dom'
import { MDBIcon, MDBBtn } from 'mdbreact';
const Home = () => {
	return (
		<div>
			<JumbotronPage
				title="Luxurios Rooms"
        subTitle="Deluxe Rooms starting from $299">
        <Link to="/rooms">
				<MDBBtn outline color="" className="mb-5 blue-gradient ">
					<MDBIcon icon="clone" className="mr-2"></MDBIcon>Our Rooms
				</MDBBtn>
        </Link>
			</JumbotronPage>
		</div>
	);
};

export default Home;
