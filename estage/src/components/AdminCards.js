import React from "react";
import {Card} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Link} from 'react-router-dom' 

export class AdminCards extends React.Component {
    render() {
        return (
            <> 
                <Col xl="5" className="px-2 mt-5 admincards">
                    <Card>
                        <Card.Body>
                            <Card.Title>{this.props.titre}</Card.Title>
                            <Card.Subtitle className="mb-2 gris small">{this.props.ville}</Card.Subtitle>
                            <Card.Text>
                                {this.props.competences}
                            </Card.Text>
                            <Card.Text>
                                {this.props.descriptionPosteRecherche}
                            </Card.Text>
                            <Link exact to={this.props.postuler} className="btn btn-primary radius mr-5">Postuler</Link>  
                            <Link exact to={this.props.postuler} className="btn btn-danger radius mr-5">Postuler</Link> 
                            <Link onClick={this.props.Supprimer} className="btn btn-success radius">Supprimer</Link>
                        </Card.Body>
                    </Card>
                </Col>  
            </>
        ); 
    }
}