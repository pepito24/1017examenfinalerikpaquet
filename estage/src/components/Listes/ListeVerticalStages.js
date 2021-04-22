import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";
import  {Listcards}  from "./Listcards";

// SRC Image
const img = "https://images.squarespace-cdn.com/content/v1/5cbf8afea9ab9526f59fe9dc/1556647345674-7SP5F1MJET1ZMDZ532HP/ke17ZwdGBToddI8pDm48kEzpZ6Y0-iwzbc_69IBBydkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnOr8OIBQiUVhsebU86gWXzc5t_c8dnc5uDML7b17RYmPPd0P-txJpSxme9C4agMgEQ/image-asset.png";

export class ListeVerticalStages extends React.Component {
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
        <Container fluid className="mt-5 pt-5">
          <Row className="mx-xl-5 px-xl-5">
            <Col xl="8" className="">
            <p className="ml-4">Accueil / Stages</p>
                {this.state.donneesRecues.map((key,k) => (
                  <Listcards titre={key.titre} entreprise={key.entreprise} description={key.description} src= {img} id={key._id} url= "/info/"></Listcards>
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