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
                            <Card.Title>{this.props.titre}{this.props.prenom} {this.props.nom}</Card.Title>
                            <Card.Subtitle className="mb-2 gris">{this.props.entreprise}{this.props.ville}</Card.Subtitle>
                            <Card.Img variant="center" className="cimg" src={this.props.src} />
                            <Card.Text>
                                {this.props.description}
                                {this.props.competences}
                            </Card.Text>
                            <Card.Text>
                                {this.props.formations}
                            </Card.Text>
                            <Link to={"/info/" + this.props.id} className="btn btn-primary">Voir</Link> 
                            <Link exact to={this.props.postuler} className="btn btn-primary ml-3">Button</Link> 
                        </Card.Body>
                    </Card>
                </Col>  
            </>
        ); 
    }
}