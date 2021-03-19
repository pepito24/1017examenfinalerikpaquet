import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AdminCards} from "../AdminCards";




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



export class ListeAdminCards extends React.Component {

  render() {
    return (
        <>          
          {this.AfficherCards()}          
        </>
    ); 
  }

  AfficherCards() { 
    return tabCards.map((element, i) => (
      <AdminCards
        title={element.title}
        subtitle={element.subtitle}
        texte={element.texte}
        link={element.link}
        postuler={element.postuler}
      ></AdminCards>
    ));
  }
}