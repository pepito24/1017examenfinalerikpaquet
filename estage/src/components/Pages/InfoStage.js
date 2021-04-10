import React , {useState , useEffect} from "react";
import  Footer  from "../Bases/Footer";
import {Button} from "react-bootstrap";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {Fiches}  from "../Fiches";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import {toast} from "react-toastify";


function InfoStage(props){
  const [donneesRecues , setDonneesRecues] = useState({titre: '', entreprise: '', ville: '', secteurActivite: '', dateDebut: '' , dateFin: '', description: '' , competences: '' , informationsSupplementaires: '' , salaire: ''});
  // Récupérer le Id dans URL
  const path = window.location.pathname.split('/')
  const id = path[path.length - 1]
  const img = "https://images.squarespace-cdn.com/content/v1/5cbf8afea9ab9526f59fe9dc/1556647345674-7SP5F1MJET1ZMDZ532HP/ke17ZwdGBToddI8pDm48kEzpZ6Y0-iwzbc_69IBBydkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnOr8OIBQiUVhsebU86gWXzc5t_c8dnc5uDML7b17RYmPPd0P-txJpSxme9C4agMgEQ/image-asset.png";


  //Ajout de la gestion des erreurs
  useEffect(() => {
    getStageInfos();
  },[]);
  
  // Gérer l'accès API
  async function getStageInfos() {
    try {
      const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage/" + id);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>    
      <Top box="header2"></Top>
      
      <Fiches 
        titre={donneesRecues.titre} 
        entreprise={donneesRecues.entreprise} 
        ville={donneesRecues.ville} 
        secteurActivite={donneesRecues.secteurActivite}
        dateDebut={donneesRecues.dateDebut}
        dateFin={donneesRecues.dateFin}
        description={donneesRecues.description}
        competences={donneesRecues.competences}
        informationsSupplementaires={donneesRecues.informationsSupplementaires}
        salaire={donneesRecues.salaire}
        titre1= "Description"
        titre2= "Compétences recherchés"
        titre3= "Informations"
        src= {img}>
      </Fiches>

      <Imgauche/>

      <Texte/>

      <Listestage/>

      <Imgdroite/>

      <Affiche/>
      
      <Footer/>
    </>
  );
}


export default InfoStage;
