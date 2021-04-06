import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";

export class Offres extends React.Component {
  render() {
    return (
      <> 
        <Container fluid className="mt-5 pt-5">
          <Row className="mx-5 px-5">
            <Col xl="8" className="">
              <p className="ml-4">Accueil / Offres / Intégrateur</p>  
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