import React from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Top}  from "../Bases/Top";
import  {Texte}  from "../Texte";
import { Listecandidats } from "../Listes/Listecandidats";
import { Listestage } from "../Listes/Listestage";

export class Accueil extends React.Component {
    render() {
        return (
            <> 
                <Top box="header1"></Top>

                <Texte h1="Tu es à la recherche de ton stage de fin d'études?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."></Texte>

                <Listestage/>

                <Imgauche/>    

                <Texte h1="Votre futur stagiaire se trouve ici." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore aliqua."></Texte>

                <Listecandidats/>

                <Imgdroite/>

                <Footer/>
            </>
        ); 
    }
}

