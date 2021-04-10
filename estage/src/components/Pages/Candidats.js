import React from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {ListeVerticalStagiaires}  from "../Listes/ListeVerticalStagiaires";

export class Candidats extends React.Component {
    render() {
        return (
            <> 
                <Top box="header2"></Top>

                <ListeVerticalStagiaires/>

                <Imgauche/>

                <Texte h1="Tu es à la recherche d'un stage?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."></Texte>

                <Listestage/>

                <Imgdroite/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
} // export class

