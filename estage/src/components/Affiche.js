import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export class Affiche extends React.Component {
  render() {
    return (
      <> 
        <Container fluid className="mt-5">
          <Row className="mx-xl-5 px-xl-5">
            <Col xl="12" className="box10"></Col>
          </Row> 
        </Container>
      </>
    ); 
  }
}