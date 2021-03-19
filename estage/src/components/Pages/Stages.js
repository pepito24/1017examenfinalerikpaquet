import React from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Top}  from "../Bases/Top";
import  {Texte}  from "../Texte";
import  {Affiche}  from "../Affiche";
import { Listecandidats } from "../Listes/Listecandidats";
import  {ListeVerticalStages}  from "../Listes/ListeVerticalStages";


export class Stages extends React.Component {

    render() {
        return (
            <> 
                <Top box="header3"></Top>

                <ListeVerticalStages/>

                <Imgauche/>

                <Texte h1="Votre futur stagiaire se trouve ici." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."></Texte>

                <Listecandidats/>

                <Imgdroite/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
}

