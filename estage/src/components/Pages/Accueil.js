import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Top}  from "../Bases/Top";
import { Listecandidats } from "../Listes/Listecandidats";
import { Listestage } from "../Listes/Listestage";


export class Accueil extends React.Component {


    render() {
        return (
            <> 
            
                <Top box="header1"></Top>

                {
                    // Your comment goes in here.
                }

                <Container fluid className="">
                    <Row className="text-center align-items-center">
                        <Col xl="12" className="mb-2 mt-3">
                            <h1 className="mt-5">Tu es à la recherche de ton<br></br> stage de fin d'études?</h1>
                            <p className="mt-4 gris">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt et dolore aliqua.</p>
                        </Col>
                    </Row> 
                </Container>
                
                <Listestage/>
                

                {
                    // Your comment goes in here.
                }

                <Imgauche/>    

                {
                    // Your comment goes in here.
                }

                <Container fluid className="">
                    <Row className="text-center align-items-center">
                        <Col xl="12" className="mb-2 mt-3">
                            <h1 className="mt-5">Votre futur stagiaire se trouve ici.</h1>
                            <p className="mt-4 gris">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt et dolore aliqua.</p>
                        </Col>
                    </Row> 
                </Container>

                <Listecandidats/>

                {
                    // Your comment goes in here.
                }

                <Imgdroite/>

                {
                    // Your comment goes in here.
                }

                <Footer/>
            </>
        ); 
    }
}

