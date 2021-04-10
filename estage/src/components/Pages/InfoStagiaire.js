import React , {useState , useEffect} from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {Fiches}  from "../Fiches";



function InfoStagiaire(props){
  const [donneesRecues , setDonneesRecues] = useState({nom: '', prenom: '', ville: '', telephone: '', competences: '' , formations: ''});
  // Récupérer le Id dans URL
  const path = window.location.pathname.split('/')
  const id = path[path.length - 1]


  //Ajout de la gestion des erreurs
  useEffect(() => {
    getStagiaireInfos();
  },[]);
  
  // Gérer l'accès API
  async function getStagiaireInfos() {
    try {
      const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/etudiant/" + id);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      console.log(reponseDeApi);
     
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
          nom={donneesRecues.nom} 
          prenom={donneesRecues.prenom} 
          ville={donneesRecues.ville} 
          telephone={donneesRecues.telephone}
          competences={donneesRecues.competences}
          formations={donneesRecues.formations}
          titre1= "Formations"
          titre2= "Compétences"
      ></Fiches>

      <Imgauche/>

      <Texte/>

      <Listestage/>

      <Imgdroite/>

      <Affiche/>
      
      <Footer/>
    </>
  );
}


export default InfoStagiaire;
