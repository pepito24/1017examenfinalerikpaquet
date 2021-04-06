import React from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {Fiches}  from "../Fiches";

export class InfoStagiaire extends React.Component {
    render() {
        return (
            <> 
                <Top box="header2"></Top>

                <Fiches/>

                <Imgauche/>

                <Texte/>

                <Listestage/>

                <Imgdroite/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
}