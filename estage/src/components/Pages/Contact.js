import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import  Footer  from "../Bases/Footer";
import  {Top}  from "../Bases/Top";

export class Contact extends React.Component {
    render() {
        return (
            <>            
                <Top box="header2"></Top>

                <Container fluid className="mt-5 my-5">
                    <Row className="mx-xl-5 px-5">
                        <Col xl="6" lg="12" className=""> 
                            <h2>Nous joindre</h2>
                            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                                <p>1110 rue de la Pénombre</p>
                                <p>987-8765-6868</p>
                        </Col>
                        <Col xl="6" lg="12" className=""> 
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control placeholder="Prénom" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlInput2">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control placeholder="Nom" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="exampleForm.ControlInput3">
                                    <Form.Label>Adresse courriel</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Questions</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <Button variant="primary" href="mailto:webmaster@example.com">
                                    Envoyer
                                </Button>
                            </Form>
                        </Col>
                    </Row> 
                </Container>
               
                <Footer/>
            </>
        ); 
    }
}

