import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom' 

export class Imgauche extends React.Component {
    render() {
        return (
            <> 
                <Container fluid className="box my-3">
                    <Row className="">
                        <Col xl="6" className="box2"></Col>
                        <Col xl="6" className="box3 px-5">
                            <h1 className="px-5 big">Pourquoi publier<br></br> une offre de stage?</h1>
                            <p className="mt-4 px-5 gris">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt et dolore aliqua.</p>
                            <ul className="px-5">
                                <li className="mx-3"><b>Lorem ipsum dolor sit amet, consectetur</b></li>
                                <li className="mx-3"><b>Lorem ipsum dolor sit amet, consectetur</b></li>
                                <li className="mx-3"><b>Lorem ipsum dolor sit amet, consectetur</b></li>
                            </ul>
                            <Link exact to="/admin" className="btn btn-primary mx-5 mt-3">Publier une offre de stage maintenant!</Link> 
                        </Col>
                    </Row>
                </Container>
            </>
        ); 
    }
}