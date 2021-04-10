import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";
import  {Listcards}  from "./Listcards";


export class ListeVerticalStagiaires extends React.Component {

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
        <Container fluid className="mt-5 pt-5">
            <Row className="mx-xl-5 px-xl-5">
                <Col xl="8" className="">
                  <p className="ml-4">Accueil / Candidats</p>
                  {this.state.donneesRecues.map((key,i) => (
                    <Listcards nom={key.nom} prenom={key.prenom} ville={key.ville} competences={key.competences} formations={key.formations} id={key._id} url= "/info/candidats/"></Listcards>
                  ))}
                </Col>
                <Col xl="4" className="">
                  <Secteurs/>
                </Col>
            </Row> 
        </Container>
      </>
    ); 
  }
}