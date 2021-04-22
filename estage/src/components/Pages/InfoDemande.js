import React , {useState , useEffect} from "react";
import  Footer  from "../Bases/Footer";
import  {Imgauche}  from "../Imgauche";
import  {Imgdroite}  from "../Imgdroite";
import  {Texte}  from "../Texte";
import  {Top}  from "../Bases/Top";
import  {Affiche}  from "../Affiche";
import  {Listestage}  from "../Listes/Listestage";
import  {Fiches}  from "../Fiches";



function InfoDemande(props){
  const [donneesRecues , setDonneesRecues] = useState({titre: '', entreprise: '', ville: '', secteurActivite: '', dateDebut: '' , dateFin: '', description: '' , competences: '' , informationsSupplementaires: '' , salaire: ''});
  // Récupérer le Id dans URL
  const path = window.location.pathname.split('/')
  const id = path[path.length - 1]

  //Ajout de la gestion des erreurs
  useEffect(() => {
    getStageInfos();
  },[]);
  
  // Gérer l'accès API
  async function getStageInfos() {
    try {
      const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes/" + id);
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
        >
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


export default InfoDemande;
