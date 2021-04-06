import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Cards } from "../Cards";


export class Listecandidats extends React.Component {

  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }
  
  // Gérer l'accès API
  async componentDidMount() {
      try {
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/etudiant");
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
            {this.state.donneesRecues.map((key,i) => (
              <Cards nom={key.nom} prenom={key.prenom} telephone={key.telephone} ville={key.ville} competences={key.competences} formations={key.formations}></Cards>
            ))}
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
}