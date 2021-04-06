import React from "react";
import {Form, Button, Col, Row} from "react-bootstrap";

export class Recherche extends React.Component {
  render() {
    return (
      <>
        <Form className="mt-5">
          <Row>
            <Col lg="4" xs="2" ></Col>
            <Col lg="3"xs="5"className="text-center text-white recherche">
                <Form.Control className="input" id="inlineFormInputName" placeholder="Mot clé" />
            </Col>
            <Col lg="1" xs="3"className="recherche">
               <Button className="button" type="submit">Recherche</Button>
            </Col>
            <Col lg="4" xs="2"></Col>
          </Row> 
        </Form>
      </>
    );
  }
}