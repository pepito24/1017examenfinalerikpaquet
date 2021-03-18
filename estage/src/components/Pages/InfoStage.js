import React from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {Fiches}  from "../Fiches";


export class InfoStage extends React.Component {


    render() {
        return (
            <> 
                 <Top box="header4"></Top>

                {
                    // Your comment goes in here.
                }

                <Fiches/>

                {
                    // Your comment goes in here.
                }

                <Imgauche/>

                {
                    // Your comment goes in here.
                }

                <Texte/>

                <Listestage/>

                {
                    // Your comment goes in here.
                }

                <Imgdroite/>

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

