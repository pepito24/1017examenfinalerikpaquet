import React from "react";
import {Card} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Link} from 'react-router-dom';


export class Listcards extends React.Component {


  render() {
      return (
          <> 
              <Col xl="12" className="mb-4">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2"><b>{this.props.subtitle}</b></Card.Subtitle>
                        <Card.Subtitle className="mb-2 gris">{this.props.subtitle}</Card.Subtitle>
                        <Card.Img variant="center" className="cimg" src="https://images.squarespace-cdn.com/content/v1/5cbf8afea9ab9526f59fe9dc/1556647345674-7SP5F1MJET1ZMDZ532HP/ke17ZwdGBToddI8pDm48kEzpZ6Y0-iwzbc_69IBBydkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnOr8OIBQiUVhsebU86gWXzc5t_c8dnc5uDML7b17RYmPPd0P-txJpSxme9C4agMgEQ/image-asset.png" />
                        <Card.Text>
                        {this.props.texte}
                        </Card.Text>
                        <Link exact to={this.props.link} className="btn btn-primary">Button</Link> 
                        <Link exact to={this.props.postuler} className="btn btn-primary ml-3">Button</Link> 
                    </Card.Body>
                </Card>
              </Col>  
          </>
      ); 
  }
}