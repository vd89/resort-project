import React from 'react'
import JumbotronPage from '../Components/JumbotronPage'
import { Link } from 'react-router-dom'
import { MDBIcon, MDBBtn } from 'mdbreact';
export default function Rooms() {
  return (
    <JumbotronPage hero='roomsHero'
    title="this is the Rooms"
    >
      <Link to="/">
        <MDBBtn outline color="" className="mb-5 blue-gradient ">
          <MDBIcon icon="clone" className="mr-2"></MDBIcon>Return Home
				</MDBBtn>
      </Link>
   </JumbotronPage>
  )
}
