import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import  {Menu}  from "../Menu";
import  {MenuAdmin}  from "../MenuAdmin";
import  {ListeAdminCards}  from "../Listes/ListeAdminCards";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {BlockImagetexte}  from "../BlockImageTexte";
import  {Login}  from "../Bases/Login";
import  {ModalDemande}  from "../ModalDemande";

export class Admin extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {connecter: false};
    this.state = {utilisateur: 0};

    this.state = {show: false};
    this.state = {setshow: false};

    this.gererConnexion = this.gererConnexion.bind(this);
    this.handleConnexion = this.handleConnexion.bind(this);
    this.handleDeconnexion = this.handleDeconnexion.bind(this);
   
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    }

    // Vérification de la connexion utilisateur
    handleConnexion(){
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        // Utilisateur normal
        if (email.toLowerCase() === "g.o.t.s@hotmail.com" && pass === "erik"){
            this.setState({ connecter: true }); 
            this.setState({ utilisateur: 1 }); 
        } 
        // Utilisateur Admin
        if (email.toLowerCase() === "admin@hotmail.com" && pass === "admin"){
            this.setState({ connecter: true }); 
            this.setState({ utilisateur: 2 }); 
        } 
    } 

    // Déconnexion
    handleDeconnexion() {
        this.setState({ connecter: false }); 
    }

    // Modal fermé (ajout)
    handleClose() {
        this.setState({ setshow: false }); 
        this.setState({ show: false });
    }

    // Modal ouvert (ajout)
    handleShow() {
        this.setState({ setshow: true });
        this.setState({ show: true });
    }

    // Choix d'affichage
    gererConnexion(){

        // Utilisateur normal connecté
        if(this.state.connecter && this.state.utilisateur === 1 ){
            return (
                <Container fluid className="">
                    <Row className="connecter">
                        <Menu onClick={this.handleDeconnexion}/>
                        <Col xl="10" className="">
                            <Row className=" mt-4 mx-5">
                               <Button variant="outline-primary" onClick={this.handleShow}>+ Ajouter une demande de stage</Button>
                            </Row> 
                            <Row className="mt-4 mx-5">
                                <ModalDemande show={this.state.show} onHide={this.handleClose} onClick={this.handleClose}/>
                                <ListeAdminCards/>  
                            </Row> 
                        </Col>    
                    </Row> 
                </Container>
            )
        }

        // Utilisateur Admin connecté
        else if(this.state.connecter && this.state.utilisateur === 2){
            return (
                <Container fluid className="connecter">
                    <Row className="">
                        <MenuAdmin onClick={this.handleDeconnexion}/>
                        <Col xl="10" className="">
                            <Row className=" mt-4 mx-5">
                                <Col xl="6" className="ajouter">
                                    <Button variant="outline-primary" className="mr-4">+ Ajouter une offre de stage</Button>
                                </Col>
                            </Row> 
                            <Row className="mt-4 mx-5">
                                <ModalDemande show={this.state.show} onHide={this.handleClose} onClick={this.handleClose}/> 
                                <ListeAdminCards /> 
                            </Row> 

                        </Col>    
                    </Row>   
                </Container>
            )
        }

        // Pas connecté
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


    // Résultat
    render() {
        return (
            this.gererConnexion()
        );
    }
}
