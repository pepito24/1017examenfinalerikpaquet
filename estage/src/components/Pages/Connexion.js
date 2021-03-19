import React from "react";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {Login}  from "../Bases/Login";
import  {BlockImagetexte}  from "../BlockImageTexte";


export class Connexion extends React.Component {

    constructor(props) {  
    super(props);  
    this.state = {connecter: false};
    this.handleConnexion = this.handleConnexion.bind(this);
    }

    handleConnexion(){
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        if (email.toLowerCase() === "g.o.t.s@hotmail.com" && pass === "erik")
            this.setState({ connecter: true });   
    } 
    render() {
        return (
            <>         
                <Top box="header2"></Top>

                <Login onClick={this.handleConnexion}/>

                <BlockImagetexte/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
}

