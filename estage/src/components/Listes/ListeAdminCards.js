import React from "react";
import {AdminCards} from "../AdminCards";
import {Link} from 'react-router-dom';


export class ListeAdminCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }
  
  // Gérer l'accès API
  async componentDidMount() {
      try {
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes");
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
          {this.state.donneesRecues.map((key,i) => (
            <AdminCards titre={key.titre} ville={key.ville} competences={key.competences} descriptionPosteRecherche={key.descriptionPosteRecherche} id={key._id}>
            </AdminCards>
            ))}             
        </>
    ); 
  }
}