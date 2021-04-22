import React from "react";
import {Col, Card, Button} from "react-bootstrap";
import  {ModalTrois}  from "../Modals/ModalTrois";
import {toast} from "react-toastify";

export class ListeAdminCardsStages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.state = {ti: null};
    this.state = { donneesRecues: [] };
  }
  
  // Gérer l'accès API
  async componentDidMount() {
      try {
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });

        if (!response.ok) {
          throw Error(response.statusText);
        }

      } catch (error) {
        console.log(error);
      }
    }

    // Supprimer un stage
    async removeDemande() { 
      try{ 
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage/" + this.state.ti, { 
        method:'delete', 
        }); 
  
        if(response.ok){  
          toast.error("Stage supprimé !");
          this.handleClose();
          return response; 
        } 
        throw new Error('Request failed!'); 
      } 
      catch(error){ 
          console.log(error); 
      } 
    }

    // Modal 3&4 fermé
    handleClose() { 
      this.setState({ show: false });
    }


  render() {
    return (
        <>          
          {this.state.donneesRecues.map((key,i) => (
            <Col xl="5" className="px-2 mt-5 mb-2 admincards">
                  <Card>
                      <Card.Body>
                          <Card.Title>{key.titre}</Card.Title>
                          <Card.Subtitle className="mb-2 gris small">{key.entreprise}- {key.ville}</Card.Subtitle>
                          <Card.Text>
                              {key.secteurActivite}
                          </Card.Text>
                          <Card.Text>
                              {key.description}
                          </Card.Text>
                          <Button onClick={()=> this.setState({show:true, ti: key._id})} className="btn btn-primary radius mr-5">Supprimer</Button> 
                      </Card.Body>
                  </Card>
                  <ModalTrois 
                    show={this.state.show} 
                    onHide={this.handleClose} 
                    onClick={this.handleClose} 
                    supprimer={()=> this.removeDemande(this.state.ti)} 
                  />
              </Col>  
            ))}             
        </>
    ); 
  }
}