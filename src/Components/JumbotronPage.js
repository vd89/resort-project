import React from 'react';
import { MDBCol, MDBJumbotron, MDBCardTitle } from 'mdbreact';

const JumbotronPage = ({ children, hero, title, subTitle }) => {
	return (
		<MDBJumbotron style={{ padding: 0, margin:0 }}>
			<MDBCol className={hero} style={{padding:10}}>
				<MDBCol className="text-center white-text banner">
					<MDBCardTitle className="h1 display-2 font-weight-bold">{title}</MDBCardTitle>
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
