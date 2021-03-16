import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Secteurs}  from "../Secteurs";


export class Fiches extends React.Component {

  render() {
    return (
        <> 
            <Container fluid className="mt-5 pt-5">
                <Row className="mx-5 px-5">
                    
                    <Col xl="8" className="">
                      <Row className="">
                        <Col xl="5" className="logo">
                          logo
                        </Col>
                        <Col xl="7" className="info">
                         <Col xl="6" className="">
                            {this.props.nom}<br></br>
                            {this.props.datedebut}<br></br>
                            {this.props.datefin}<br></br>
                          </Col>
                          <Col xl="6" className="">
                            {this.props.nom}<br></br>
                            {this.props.datedebut}<br></br>
                            {this.props.datefin}<br></br>
                          </Col>
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