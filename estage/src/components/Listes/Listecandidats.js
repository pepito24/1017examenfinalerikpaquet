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



export class Listecandidats extends React.Component {

  render() {
    return (
        <> 
          <Container fluid className="px-5">
              <Row className="align-items-center px-5">
                  {this.AfficherCards2()}
              </Row>
              <Row className="mb-5">
                  <Col xl="12" className="text-center text-white my-5 pt-5">
                      <Link exact to="/candidats" className="btn btn-danger">Voir tous les candidats</Link> 
                  </Col>
              </Row>
          </Container>
        </>
    ); 
  }

  AfficherCards2() { 
    return tabCards.map((element, i) => (
      <Cards
        title={element.title}
        subtitle={element.subtitle}
        texte={element.texte}
      ></Cards>
    ));
  }
}