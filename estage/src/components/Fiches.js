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
                    <p className="mb-4">Accueil / Candidats</p>
                    <Row className="">
                      <Col xl="4" className="logo text-center">
                        <Card>
                          <Card.Body>
                          <Card.Img variant="center" className="my-4" src="https://images.squarespace-cdn.com/content/v1/5cbf8afea9ab9526f59fe9dc/1556647345674-7SP5F1MJET1ZMDZ532HP/ke17ZwdGBToddI8pDm48kEzpZ6Y0-iwzbc_69IBBydkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnOr8OIBQiUVhsebU86gWXzc5t_c8dnc5uDML7b17RYmPPd0P-txJpSxme9C4agMgEQ/image-asset.png" />
                            <Card.Title className="mt-4">HUB Inter.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">1101 rue de la Pénombre</Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xl="8" className="info">
                      <Card className="px-3">
                       <Row className="">
                         
                          <Col xl="12" className="">
                            <h5 className="my-3">D/veloppeur front-end</h5>
                          </Col>
                        </Row> 
                        <Row className="">
                          <Col xl="6" lg="12" className="">

                            <p>D/veloppeur front-end</p>
                            <p>D/veloppeur front-end</p>
                            <p>D/veloppeur front-end</p>
                          </Col>
                          <Col xl="6" lg="12" className="info2">
                            <p>D/veloppeur front-end</p>
                            <p>D/veloppeur front-end</p>
                            <p>D/veloppeur front-end</p>
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
                        <h5 className="my-3">Candidat recherché</h5>
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