import React from "react";
import {Card} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Link} from 'react-router-dom' 


export class Cards extends React.Component {


  render() {
      return (
          <> 
              <Col xl="3" className="px-2 mt-5">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 gris small">{this.props.subtitle}</Card.Subtitle>
                        <Card.Text>
                        {this.props.texte}
                        </Card.Text>
                        <Link exact to={this.props.link} className="">Détails</Link> 
                        <Link exact to={this.props.postuler} className="btn btn-primary radius ml-5">Postuler</Link> 
                    </Card.Body>
                </Card>
              </Col>  
          </>
      ); 
  }
}