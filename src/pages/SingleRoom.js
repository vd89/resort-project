import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBCardTitle } from 'mdbreact';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const HeroSingle = styled.header`
	min-height: 60vh;
	background: url(${(props) => (props.img ? props.img : defaultImg)})
		center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
		};
	}
	static contextType = RoomContext;
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		// console.log(room);

		if (!room) {
			return (
				<div className="error">
					<h3>No such room could found</h3>
					<Link to="/room" className="btn">
						Room
					</Link>
				</div>
			);
		}

		const {
			name,
			price,
			capacity,
			description,
			pets,
			extras,
			images,
			breakfast,
			size
		} = room;
		const [mainImg, ...defaultImg] = images;
		return (
			<>
				<HeroSingle
					img={mainImg || this.state.defaultImg}
					style={{ marginTop: 50, padding: 50 }}>
					<MDBCol>
						<MDBCol
							className="text-center white-text  banner"
							style={{ marginTop: 50 }}>
							<MDBCardTitle className="h1 display-3 font-weight-bold">{`${name} Room`}</MDBCardTitle>
							<div></div>
							<Link to="/rooms">
								<MDBBtn outline color="" className="blue-gradient ">
									Back to Rooms
								</MDBBtn>
							</Link>
						</MDBCol>
					</MDBCol>
				</HeroSingle>
				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((item, index) => {
							return <img src={item} alt="" key={index} />;
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3 className="display-4">details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3 className="display-4">Info</h3>
							<h6>Price : {`$ ${price }`} </h6>
							<h6>Size : {size} SQFT</h6>
							<h6>
								max capacity : {""}

								{capacity>1?`${capacity} people`: `${capacity} person`}
							</h6>
							<h6>
								{pets ? "pet allowed" : "no pets allowed"}
							</h6>
							<h6>
								{breakfast && "free breakfast included"}
							</h6>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6 className="display-4">extras</h6>
					<ul className="extras">
						{extras.map((item, index) =>
						{
							return <li key={index}>{item} </li>
						})}
					</ul>
				</section>
			</>
		);
	}
}
