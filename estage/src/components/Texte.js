import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export class Texte extends React.Component {
    render() {
        return (
            <> 
                <Container fluid className="">
                    <Row className="text-center align-items-center">
                        <Col xl="12" className="mb-2 mt-3">
                            <h1 className="mt-5">{this.props.h1}</h1>
                            <p className="mt-4 gris">{this.props.text}</p>
                        </Col>
                    </Row> 
                </Container>
            </>
        ); 
    }
}