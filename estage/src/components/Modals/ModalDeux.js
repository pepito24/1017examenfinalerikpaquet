import React from "react";
import { Button,Modal,Form } from "react-bootstrap";
import {toast} from "react-toastify";


export class ModalDeux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errors : {}};
    
        this.handleAdd = this.handleAdd.bind(this);
        this.addStage = this.addStage.bind(this);
      }
    
      async addStage(titre,entreprise,ville,secteurActivite,description) { 
        try{ 
          const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/stage", { 
            method:'POST', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({
                titre: titre,
                entreprise: entreprise,
                ville: ville,
                secteurActivite: secteurActivite,
                description: description,
            }) 
          }); 
          if(response.ok){ 
            const jsonResponse = await response.json(); 
            toast.success("Ajout du stage ! ");
    
            return jsonResponse; 
          } 
          throw new Error('Request failed!'); 
      } 
       catch(error){ 
          console.log(error); 
       } 
    }
    
    // Validation de formulaire
    formulaireEstValide(titre,entreprise,ville,secteurActivite,description){
      const _errors ={};
    
      if(!titre) _errors.titre = "Le titre est obligatoire";
      if(!entreprise) _errors.entreprise = "Est obligatoire";
      if(!ville) _errors.ville = "Est obligatoire";
      if(!secteurActivite) _errors.secteurActivite = "Est obligatoire";
      if(!description) _errors.description = "Est obligatoire";
    
      this.setState({errors : _errors});
      return Object.keys(_errors).length === 0;
    }

    // Confirmation de formulaire
    handleAdd(event){
        event.preventDefault();
        
        const titre = document.getElementById('titre').value;
        const entreprise = document.getElementById('entreprise').value;
        const ville = document.getElementById('ville').value;
        const secteurActivite = document.getElementById('secteurActivite').value;
        const description = document.getElementById('description').value;
        
    
        if(this.formulaireEstValide(titre,entreprise,ville,secteurActivite,description)){
          this.addStage(titre,entreprise,ville,secteurActivite,description);
        }
        
      }

  render() {
    return (
      <>
        <Modal show={this.props.voir} onHide={this.props.hide}>
        <Modal.Header closeButton>
            <Modal.Title>Ajouter une demande de stage</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group controlId="titre">
                <Form.Label>titre</Form.Label>
                <Form.Control type="text" placeholder="titre" isInvalid={!!this.state.errors.titre}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.titre}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group controlId="ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" placeholder="Ville" isInvalid={!!this.state.errors.ville}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.ville}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group controlId="entreprise">
                <Form.Label>Entreprise</Form.Label>
                <Form.Control type="text" placeholder="Entreprise" isInvalid={!!this.state.errors.entreprise}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.entreprise}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group controlId="secteurActivite">
                <Form.Label>secteurActivite</Form.Label>
                <Form.Control type="text" placeholder="secteurActivite" isInvalid={!!this.state.errors.secteurActivite}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.secteurActivite}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} isInvalid={!!this.state.errors.description}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.description}
                </Form.Control.Feedback>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form> 

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}

