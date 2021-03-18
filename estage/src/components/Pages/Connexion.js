import React from "react";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {Login}  from "../Bases/Login";
import {Container, Row, Col} from "react-bootstrap";


export class Connexion extends React.Component {

    render() {
        return (
            <> 
                    
                <Top box="header2"></Top>

                {
                    // Your comment goes in here.
                }

                <Login/>

                {
                    // Your comment goes in here.
                }

                <Container fluid className="">
                    <Row className="mx-xl-5 px-xl-5">
                        
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

