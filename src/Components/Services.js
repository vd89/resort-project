import React, { Component } from 'react'
import Title from './Title'
import {MDBIcon, MDBContainer} from "mdbreact"

export default class Services extends Component
{
  state = {
    services: [
      {
        icons: < MDBIcon icon="cocktail" />,
        title: "Free Cocktails",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim facilis aliquid",         
      },
      {
        icons: < MDBIcon icon="hiking" />,
        title: "Endless Hicking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim facilis aliquid",
      },
      {
        icons: < MDBIcon icon="shuttle-van" />,
        title: "Free Shuttle-Van Service",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim facilis aliquid",
      },
      {
        icons: < MDBIcon icon="beer" />,
        title: "Free Beverages",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim facilis aliquid",
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <MDBContainer>

        <div className="services-center">
          {this.state.services.map((item, index) =>
          {
            return <article key={index} className="services">
              <span>{item.icons}</span>
              <h6 className="font-weight-bold">{item.title} </h6>
              <p>{item.info} </p>
            </article>
          })}
        </div>
          </MDBContainer>
      </section>
    )
  }
}
