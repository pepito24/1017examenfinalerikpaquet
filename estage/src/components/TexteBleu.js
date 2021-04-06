import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  {BlockImagetexte}  from "./BlockImageTexte";

export class TexteBleu extends React.Component {
    render() {
        return (
            <> 
                <Container fluid className="">
                    <Row className="mx-xl-5 px-xl-5">  
                        <Col xl="12" className="box7 py-5 px-5 text-white">
                            <h4 className="pt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h4>
                            <p className="mt-4 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua.
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua
                            sed do eiusmod tempor incididunt et dolore aliqua.
                            </p>
                        </Col>
                    </Row> 
                </Container>

                <BlockImagetexte/>
            </>
        ); 
    }
}