import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import  {Menu}  from "../Menu";
import  {ListeAdminCards}  from "../Listes/ListeAdminCards";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {BlockImagetexte}  from "../BlockImageTexte";
import  {Login}  from "../Bases/Login";

export class Admin extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {connecter: false};

    this.gererConnexion = this.gererConnexion.bind(this);
    this.handleConnexion = this.handleConnexion.bind(this);
    this.handleDeconnexion = this.handleDeconnexion.bind(this);
    }

    handleConnexion(){
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        if (email.toLowerCase() === "g.o.t.s@hotmail.com" && pass === "erik")
            this.setState({ connecter: true });   
    } 

    handleDeconnexion() {
        this.setState({ connecter: false }); 
    }

    gererConnexion(){
        if(this.state.connecter){
            return (
                <Container fluid className="">
                    <Row className="connecter">
                        <Menu onClick={this.handleDeconnexion}/>
                        <Col xl="10" className="">
                            <Row className="connecter text-center mt-4 ml-xl-3">
                                <Col xl="2" xs="6" className="">
                                    <Button variant="outline-primary">+ Ajouter une offre de stage</Button>
                                </Col>
                                <Col xl="3" xs="6" className="">
                                    <Button variant="outline-primary">+ Ajouter une demande de stage</Button>
                                </Col>
                                <Col xl="5" className=""></Col>
                                <Col xl="3" className=""></Col>
                            </Row> 
                            <Row className="mt-4 mx-5">
                                
                                    <ListeAdminCards/>
                                
                            </Row> 
                        </Col>    
                    </Row> 
                </Container>
            )
        }
        else{
            return(
                <>
                    <Top box="header2"></Top>

                    <Login onClick={this.handleConnexion}/>

                    <BlockImagetexte/>

                    <Affiche/>
                
                    <Footer/>
                </>
            )
        }
    }


    render() {
        return (
            this.gererConnexion()
        );
    }
}
