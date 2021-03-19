import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";
import  {Listcards}  from "./Listcards";




const tabCards = [
    {
      title: "Card title",
      subtitle: "Les invincibles",
      texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
      postuler: "/info-stagiaire",
    },
    {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/info-stagiaire",
      },
      {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/info-stagiaire",
      },
      {
        title: "Card title",
        subtitle: "Les invincibles",
        texte: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
        postuler: "/info-stagiaire",
      },
    
  ];



export class ListeVerticalStages extends React.Component {

  render() {
    return (
        <> 
            <Container fluid className="mt-5 pt-5">
                <Row className="mx-xl-5 px-xl-5">
                    
                    <Col xl="8" className="">
                    <p className="ml-4">Accueil / Stages</p>
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
        link={element.link}
        postuler={element.postuler}
      ></Listcards>
    ));
  }
}