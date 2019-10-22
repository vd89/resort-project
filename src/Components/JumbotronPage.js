import React from 'react';
import { MDBCol, MDBJumbotron, MDBCardTitle } from 'mdbreact';
const JumbotronPage = ({ children, hero, title, subTitle }) => {
	return (
		<MDBJumbotron style={{ padding: 0, margin:0 }}>
			<MDBCol className={hero}>
				<MDBCol className="text-center white-text font-weight-bold banner">
					<MDBCardTitle className="  display-2">{title}</MDBCardTitle>
					<div></div>
					<p>{subTitle}</p>
					{children}
				</MDBCol>
			</MDBCol>
		</MDBJumbotron>
	);
};

JumbotronPage.defaultProps = {
	hero: 'defaultHero',
};

export default JumbotronPage;
