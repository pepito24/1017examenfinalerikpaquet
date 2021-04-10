import React from "react";
import { Button,Modal, Form } from "react-bootstrap";
import {toast} from "react-toastify";

export class ModalDemande extends React.Component {

    constructor(props) {
        super(props);
        this.state = {errors : {}};
    
        this.handleAdd = this.handleAdd.bind(this);
        this.addStage = this.addStage.bind(this);
      }
    
      async addStage(titre,competences,autresFormations) { 
        try{ 
          const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/demandes", { 
            method:'POST', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({
                titre: titre,
                competences: competences,
                autresFormations: autresFormations,
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
    
    formulaireEstValide(titre,competences,autresFormations){
      const _errors ={};
    
      if(!titre) _errors.titre = "Le titre est obligatoire";
      if(!competences) _errors.competences = "Est obligatoire";
      if(!autresFormations) _errors.autresFormations = "Est obligatoire";
    
      this.setState({errors : _errors});
      return Object.keys(_errors).length === 0;
    }


    
    handleAdd(event){
        event.preventDefault();
        
        const titre = document.getElementById('titre').value;
        const competences = document.getElementById('competences').value;
        const autresFormations = document.getElementById('autresFormations').value;
        
    
        if(this.formulaireEstValide(titre,competences,autresFormations)){
          this.addStage(titre,competences,autresFormations);
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
                <Form.Label>titre</Form.Label>
                <Form.Control type="text" placeholder="titre" isInvalid={!!this.state.errors.titre}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.titre}
                </Form.Control.Feedback>
              </Form.Group>
              
             
              <Form.Group controlId="competences">
                <Form.Label>Competences</Form.Label>
                <Form.Control type="text" placeholder="Competences" isInvalid={!!this.state.errors.competences}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.competences}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group controlId="autresFormations">
                <Form.Label>autresFormations</Form.Label>
                <Form.Control type="text" placeholder="autresFormations" isInvalid={!!this.state.errors.autresFormations}/>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.autresFormations}
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

