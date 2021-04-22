import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import  {Secteurs}  from "./Secteurs";


export class Fiches extends React.Component {
  render() {
    return (
        <> 
          <Container fluid className="my-5 pt-5">
              <Row className="mx-xl-5 mx-0 px-xl-5 px-0">
                  <Col xl="8" className="">
                    <Row className="">
                      <Col xl="4" className="logo text-center">
                        <Card>
                          <Card.Body>
                            <Card.Title className="mt-2">{this.props.titre} {this.props.prenom} {this.props.nom}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.secteurActivite}</Card.Subtitle>
                            <Card.Img variant="center" className="my-4" src={this.props.src} />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xl="8" className="info">
                      <Card className="px-3">
                       <Row className="">
                         
                          <Col xl="12" className="">
                            <h5 className="my-3">{this.props.entreprise}</h5>
                          </Col>
                        </Row> 
                        <Row className="">
                          <Col xl="6" lg="12" className="">

                            <p>{this.props.ville}</p>
                            <p>{this.props.salaire}</p>
                            
                          </Col>
                          <Col xl="6" lg="12" className="info2">
                            <p>{this.props.dateDebut}</p>
                            <p>{this.props.dateFin}</p>
                            
                          </Col>
                        </Row>
                        <Row className="">
                          <Col xl="12" className="text-center">
                            <Button href="mailto:webmaster@example.com" className="btn btn-primary my-3">Contact</Button>
                          </Col>
                        </Row>
                        </Card> 
                      </Col>
                    </Row> 
                    <Row className="">
                      <Col xl="12" className="my-4">
                        <h5 className="my-3">{this.props.titre1}</h5>
                        <p>{this.props.description}</p>
                        <p>{this.props.formations}</p>
                          
                      </Col>
                    </Row>
                    <Row className="">
                      <Col xl="12" className="mb-4">
                        <h5 className="my-3">{this.props.titre2}</h5>
                        <p>{this.props.competences}</p>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col xl="12" className="mb-4">
                        <h5 className="my-3">{this.props.titre3}</h5>
                        <p>{this.props.informationsSupplementaires}</p>
                      </Col>
                    </Row>
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