import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {Header}  from "./Header";
import  {Recherche}  from "../Recherche";

export class Top extends React.Component {

  render() {
      return (
          <> 
            <Container fluid className={this.props.box}>
                <Header/>
                <Row className="">
                    <Col xl="12" className="text-center text-white">
                        <h1>Trouvez votre stage!</h1>
                    </Col>
                </Row> 
                <Recherche/>      
            </Container> 
          </>
      ); 
  }
}