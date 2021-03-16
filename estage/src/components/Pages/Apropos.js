import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";


export class Apropos extends React.Component {


    render() {
        return (
            <> 
                    
                <Top box="header2"></Top>

                {
                    // Your comment goes in here.
                }

                <Container fluid className="">
                    <Row className="mx-5 px-5">
                        
                        <Col xl="12" className="box3">
                            
                        </Col>
                        
                    </Row> 
                </Container>



                {
                    // Your comment goes in here.
                }


                <Container fluid className="">
                    <Row className="mx-5 px-5">
                        
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

                {
                    // Your comment goes in here.
                }

                <Container fluid className="">
                    <Row className="mx-5 px-5">
                        
                        <Col xl="6" className="box8"></Col>
                        <Col xl="6" className="box9 px-5">
                            <p className="mt-4 px-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua.</p>
                        </Col>
                        
                    </Row> 
                </Container>

                {
                    // Your comment goes in here.
                }

                <Affiche/>

                {
                    // Your comment goes in here.
                }
               
                <Footer/>
            </>
        ); 
    }
}

