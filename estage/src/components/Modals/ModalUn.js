import React from "react";
import { Button,Modal, Form } from "react-bootstrap";
import {toast} from "react-toastify";

export class ModalUn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {errors : {}};
    
        this.handleAdd = this.handleAdd.bind(this);
        this.addStage = this.addStage.bind(this);
      }
    
      // Ajouter une demande de stage
      async addStage(titre,competences,ville,descriptionPosteRecherche) { 
        try{ 
          const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes", { 
            method:'POST', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({
                titre: titre,
                competences: competences,
                ville: ville,
                descriptionPosteRecherche: descriptionPosteRecherche,
            }) 
          }); 
          if(response.ok){ 
            const jsonResponse = await response.json(); 
            toast.success("Ajout de la demande de stage ! ");
            return jsonResponse; 
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
        
        const titre = document.getElementById('titre').value;
        const competences = document.getElementById('competences').value;
        const ville = document.getElementById('ville').value;
        const descriptionPosteRecherche = document.getElementById('descriptionPosteRecherche').value;
        
    
        if(this.formulaireEstValide(titre,competences,ville,descriptionPosteRecherche)){
          this.addStage(titre,competences,ville,descriptionPosteRecherche);
        }   
      }


  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Ajouter une demande de stage</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group controlId="titre">
                <Form.Label>Titre de la demande</Form.Label>
                <Form.Control type="text" placeholder="Titre" isInvalid={!!this.state.errors.titre}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.titre}
                </Form.Control.Feedback>
              </Form.Group>
              
             
              <Form.Group controlId="competences">
                <Form.Label>Compétences</Form.Label>
                <Form.Control type="text" placeholder="Compétences" isInvalid={!!this.state.errors.competences}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.competences}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" placeholder="Ville" isInvalid={!!this.state.errors.ville}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.ville}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group controlId="descriptionPosteRecherche">
                <Form.Label>Description du poste recherché</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Description du poste recherché" isInvalid={!!this.state.errors.descriptionPosteRecherche}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.descriptionPosteRecherche}
                </Form.Control.Feedback>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form> 

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}

