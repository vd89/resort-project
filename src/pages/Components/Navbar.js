import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavbarNav,
	MDBNavItem,
} from 'mdbreact';

export default class Navbar extends Component {
	state = {
		isOpen: false,
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<MDBNavbar color="blue-gradient" dark expand="md">
				<MDBNavbarBrand className="ml-5">
					<strong className="white-text font-weight-bold display-4">
						Resort
					</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.handleToggle} />
				<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav right className="mr-5 pr-5">
						<MDBNavItem active className="mr-5">
							<Link to="/" className="white-text font-weight-bold ">
								Home
							</Link>
						</MDBNavItem>
						<MDBNavItem className="mr-5 pr-5">
							<Link to="/rooms" className="white-text font-weight-bold">
								Rooms
							</Link>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}
