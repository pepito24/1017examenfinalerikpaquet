import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import  {Secteurs}  from "./Secteurs";
import {Link} from 'react-router-dom';

export class Fiches extends React.Component {
  render() {
    return (
        <> 
          <Container fluid className="my-5 pt-5">
              <Row className="mx-5 px-5">
                  
                  <Col xl="8" className="">
                    <Row className="">
                      <Col xl="4" className="logo text-center">
                        <Card>
                          <Card.Body>
                          <Card.Img variant="center" className="my-4" src={this.props.src} />
                            <Card.Title className="mt-4">{this.props.titre} {this.props.prenom} {this.props.nom}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.entreprise} - {this.props.ville}</Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xl="8" className="info">
                      <Card className="px-3">
                       <Row className="">
                         
                          <Col xl="12" className="">
                            <h5 className="my-3">Développeur front-end</h5>
                          </Col>
                        </Row> 
                        <Row className="">
                          <Col xl="6" lg="12" className="">

                            <p>Développeur front-end</p>
                            <p>Développeur front-end</p>
                            <p>Développeur front-end</p>
                          </Col>
                          <Col xl="6" lg="12" className="info2">
                            <p>Développeur front-end</p>
                            <p>Développeur front-end</p>
                            <p>Développeur front-end</p>
                          </Col>
                        </Row>
                        <Row className="">
                          <Col xl="12" className="text-center">
                            <Link exact to="/" className="btn btn-primary my-3">Contacter le candidat</Link>
                          </Col>
                        </Row>
                        </Card> 
                      </Col>
                    </Row> 
                    <Row className="">
                      <Col xl="12" className="my-4">
                        <h5 className="my-3">Candidats recherchés</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col xl="12" className="mb-4">
                        <h5 className="my-3">Responsabilités</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col xl="12" className="mb-4">
                        <h5 className="my-3">À propos de l'entreprise</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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