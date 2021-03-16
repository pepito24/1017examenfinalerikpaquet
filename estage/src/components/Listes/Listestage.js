import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Cards } from "../Cards";



const tabCards = [
    {
      title: "Card title",
      subtitle: "Les invincibles",
      texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
      postuler: "/",
    },
    {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/",
      },
      {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/",
      },
      {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/",
      },
    
  ];



export class Listestage extends React.Component {


  render() {
    return (
        <> 
           <Container fluid className="px-5">
              <Row className="align-items-center px-5">
                  {this.AfficherCards()}
              </Row>
              <Row className="mb-5">
                  <Col xl="12" className="text-center text-white my-5 pt-5">
                      <Link exact to="/" className="btn btn-danger">Voir toutes les offres de stage</Link> 
                  </Col>
              </Row>
          </Container>
        </>
    ); 
}

AfficherCards() { 
  return tabCards.map((element, i) => (
    <Cards
      title={element.title}
      subtitle={element.subtitle}
      texte={element.texte}
    ></Cards>
  ));
}
}