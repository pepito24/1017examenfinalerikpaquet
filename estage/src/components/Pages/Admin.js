import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import  {Menu}  from "../Menu";
import  {ListeAdminCards}  from "../Listes/ListeAdminCards";


export class Admin extends React.Component {

  render() {
    return (
        <> 
            <Container fluid className="">
                <Row className="connecter">
                    <Menu/>
                    <Col xl="10" className="">
                        <Row className="connecter text-center mt-4 ml-xl-3">
                            <Col xl="2" xs="6" className="">
                                <Button variant="outline-primary">+ Ajouter une offre de stage</Button>
                            </Col>
                            <Col xl="3" xs="6" className="">
                                <Button variant="outline-primary">+ Ajouter une demande de stage</Button>
                            </Col>
                            <Col xl="5" className=""></Col>
                            <Col xl="3" className=""></Col>
                        </Row> 
                        <Row className="mt-4 mx-5">
                           
                                <ListeAdminCards/>
                            
                        </Row> 
                    </Col>    
                </Row> 
            </Container>
        </>
    ); 
  }
}