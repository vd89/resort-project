import React from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon, MDBBtn } from 'mdbreact';
import Services from '../Components/Services';
import JumbotronPage from '../Components/JumbotronPage';
import FeaturedRooms from '../Components/FeaturedRooms';
const Home = () => {
	return (
		<>
			<JumbotronPage
				title="Luxurios Rooms"
				subTitle="Deluxe Rooms starting from $299">
				<Link to="/rooms">
					<MDBBtn outline color="" className="mb-5 blue-gradient ">
						<MDBIcon icon="clone" className="mr-2"></MDBIcon>Our Rooms
					</MDBBtn>
				</Link>
			</JumbotronPage>
			<Services />
			<FeaturedRooms/>
		</>
	);
};

export default Home;
