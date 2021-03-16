import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";
import  {Listcards}  from "../Listes/Listcards";




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



export class Listevertical extends React.Component {

  render() {
    return (
        <> 
            <Container fluid className="mt-5 pt-5">
                <Row className="mx-5 px-5">
                    
                    <Col xl="8" className="">
                    <p className="ml-4">Accueil / Candidats</p>
                        {this.AfficherCards()}
                    </Col>
                    <Col xl="4" className="">
                            <Secteurs/>
                    </Col>
                    
                </Row> 
            </Container>
        </>
    ); 
  }

  AfficherCards() { 
    return tabCards.map((element, i) => (
      <Listcards
        title={element.title}
        subtitle={element.subtitle}
        texte={element.texte}
      ></Listcards>
    ));
  }
}