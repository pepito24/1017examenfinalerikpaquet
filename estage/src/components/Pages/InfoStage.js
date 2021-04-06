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
    constructor(props) {
        super(props);
        this.state = { donneesRecues: [] };
        this.state = { stageID: window.location.pathname };
      }

      async componentDidMount() {
        try { 

          const stageID = this.state.stageID;
          const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage" + "/" + stageID);
          const reponseDeApi = await response.json();
          this.setState({ donneesRecues: reponseDeApi });
         
          if (!response.ok) {
            throw Error(response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
      }

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