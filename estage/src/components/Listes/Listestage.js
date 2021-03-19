import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Cards } from "../Cards";


export class Listestage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }
  
  //Ajout de la gestion des erreurs
  async componentDidMount() {
      try {
        const response = await fetch("http://localhost:3001/stages");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }


  render() {
    return (
        <> 
           <Container fluid className="px-xl-5">
              <Row className="align-items-center px-5">
               {this.state.donneesRecues.slice(0, 4).map((key,i) => (
                <Cards title={key.title} subtitle={key.subtitle} texte={key.texte}></Cards>
                ))}     
              </Row>
              <Row className="mb-5">
                  <Col xl="12" className="text-center text-white my-5 pt-5">
                      <Link exact to="/stages" className="btn btn-danger">Voir toutes les offres de stage</Link> 
                  </Col>
              </Row>
          </Container>
        </>
    ); 
  }
}