import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Menu}  from "../Menu";


export class Admin extends React.Component {

  render() {
    return (
        <> 
            <Container fluid className="">
                <Row className="connecter">
                    <Menu/>
                    <Col xl="10" className="">
                        <Row className="connecter">
                            <Col xl="12" className="">

                            </Col>
                        </Row> 
                    </Col>
                    
                </Row> 
            </Container>
        </>
    ); 
  }
}