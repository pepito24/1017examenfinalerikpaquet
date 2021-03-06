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
                        <Card.Title>{this.props.titre} {this.props.prenom} {this.props.nom}</Card.Title>
                        <Card.Subtitle className="mb-2 gris small">{this.props.entreprise} - {this.props.ville}</Card.Subtitle>
                        <Card.Text>
                            {this.props.description}
                            {this.props.competences}
                        </Card.Text>
                        <Card.Text>
                            {this.props.formations}
                        </Card.Text> 
                        <Link to={this.props.url + this.props.id} className="btn btn-primary radius">En savoir plus</Link> 
                    </Card.Body>
                </Card>
                </Col>  
            </>
        ); 
    }
} // export class