import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Cards } from "../Cards";

const ok = "/info/";
export class Listestage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }
  
  // Gérer l'accès API
  async componentDidMount() {
      try {
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage");
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
            {this.state.donneesRecues.slice(1, 5).map((key,i) => (
            <Cards titre={key.titre} ville={key.ville} entreprise={key.entreprise} description={key.description} link={ok + key.id}></Cards>
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