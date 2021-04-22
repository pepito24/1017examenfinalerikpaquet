import React from "react";
import {Col, Card, Button, Form, Modal} from "react-bootstrap";
import  {ModalTrois}  from "../Modals/ModalTrois";
import {toast} from "react-toastify";

export class ListeAdminCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.state = {ti: null};
    this.state = {titre: null};
    this.state = {voir: false};
    this.state = {donneesRecues: [], errors:{}};
  
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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

  // Modifier une demande de stage
  async editDemande(id,titre,competences,ville,descriptionPosteRecherche) { 
    try{ 
      console.log(id);
      const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes/" + id, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'}, 
        body:JSON.stringify({
          _id: id,
          titre: titre,
          competences: competences,
          ville: ville,
          descriptionPosteRecherche: descriptionPosteRecherche,
        }) 
      }); 
      if(response.ok){ 
        toast.success("Demande modifié !");
        return response; 
      } 
      throw new Error('Request failed!'); 
      } 
      catch(error){ 
          console.log(error); 
      } 
    }
  // Supprimer une demande de stage
  async removeDemande() { 
    try{ 
      const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes/" + this.state.ti, { 
      method:'delete', 
      }); 

      if(response.ok){  
        toast.error("Demande supprimé !");
        this.handleClose();
        return response; 
      } 
      throw new Error('Request failed!'); 
    } 
    catch(error){ 
        console.log(error); 
    } 
  }

  // Validation de formulaire
  formulaireEstValide(titre,competences,ville,descriptionPosteRecherche){
    const _errors ={};
  
    if(!titre) _errors.titre = "Obligatoire";
    if(!competences) _errors.competences = "Obligatoire";
    if(!ville) _errors.ville = "Obligatoire";
    if(!descriptionPosteRecherche) _errors.descriptionPosteRecherche = "Obligatoire";
  
    this.setState({errors : _errors});
    return Object.keys(_errors).length === 0;
  }

   // Confirmation de formulaire
   handleAdd(event){
    event.preventDefault();

    const id = this.state.ti;
    const titre = document.getElementById('titre').value;
    const competences = document.getElementById('competences').value;
    const ville = document.getElementById('ville').value;
    const descriptionPosteRecherche = document.getElementById('descriptionPosteRecherche').value;
    
    if(this.formulaireEstValide(titre,competences,ville,descriptionPosteRecherche)){
      this.editDemande(id,titre,competences,ville,descriptionPosteRecherche);
    }
  }

  // Modal 3&4 fermé
  handleClose() { 
    this.setState({ show: false });
    this.setState({ voir: false });
  }

  render() {
    return (
        <>          
          {this.state.donneesRecues.map((key) => (
            <Col xl="5" className="px-2 mt-5 admincards">
                  <Card>
                      <Card.Body>
                          <Card.Title>{key.titre}</Card.Title>
                          <Card.Subtitle className="mb-2 gris small">{key.ville}</Card.Subtitle>
                          <Card.Text>
                              {key.competences}
                              
                          </Card.Text>
                          <Card.Text>
                              {key.descriptionPosteRecherche}
                          </Card.Text> 
                            <Button onClick={()=> this.setState({show:true, ti: key._id})} className="btn btn-primary radius mr-3 mb-3">Supprimer</Button> 
                            <Button 
                              onClick={()=> this.setState({voir:true, ti: key._id, titre: key.titre, competences: key.competences, ville: key.ville, descriptionPosteRecherche: key.descriptionPosteRecherche})} 
                              className="btn btn-primary radius mr-5 mb-3">Modifier</Button>
                      </Card.Body>
                  </Card>

                  <ModalTrois 
                    show={this.state.show} 
                    onHide={this.handleClose} 
                    onClick={this.handleClose} 
                    supprimer={()=> this.removeDemande(this.state.ti)} 
                  />


                  <Modal show={this.state.voir} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modifier une demande de stage</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                      <Form.Group controlId="titre">
                        <Form.Label>Titre de la demande</Form.Label>
                        <Form.Control type="text" placeholder="Titre"  defaultValue={this.state.titre} isInvalid={!!this.state.errors.titre}/>
                        <Form.Control.Feedback type="invalid">
                          {this.state.errors.titre}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                    
                      <Form.Group controlId="competences">
                        <Form.Label>Compétences</Form.Label>
                        <Form.Control type="text" placeholder="Compétences"  defaultValue={this.state.competences} isInvalid={!!this.state.errors.competences}/>
                        <Form.Control.Feedback type="invalid">
                          {this.state.errors.competences}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="ville">
                        <Form.Label>Ville</Form.Label>
                        <Form.Control type="text" placeholder="Ville"  defaultValue={this.state.ville} isInvalid={!!this.state.errors.ville}/>
                        <Form.Control.Feedback type="invalid">
                          {this.state.errors.ville}
                        </Form.Control.Feedback>
                      </Form.Group>
                    
                      <Form.Group controlId="descriptionPosteRecherche">
                        <Form.Label>Description du poste recherché</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description du poste recherché"  defaultValue={this.state.descriptionPosteRecherche} isInvalid={!!this.state.errors.descriptionPosteRecherche}/>
                        <Form.Control.Feedback type="invalid">
                          {this.state.errors.descriptionPosteRecherche}
                        </Form.Control.Feedback>
                      </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleAdd}>
                        Modifier
                    </Button>
                    </Form> 

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
              </Col>  
            ))}             
        </>
    ); 
  }
}