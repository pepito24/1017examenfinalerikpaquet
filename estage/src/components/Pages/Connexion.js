import React from "react";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {Login}  from "../Bases/Login";
import  {BlockImagetexte}  from "../BlockImageTexte";


export class Connexion extends React.Component {
    render() {
        return (
            <>         
                <Top box="header2"></Top>

                <Login/>

                <BlockImagetexte/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
}

