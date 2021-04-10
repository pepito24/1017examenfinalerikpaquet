import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

export class Login extends React.Component {
  constructor(props) {  
    super(props);  

    this.state = {errors : {}}; 
  } 

// Gestion des erreurs
  formulaireEstValide(email){
    const _errors ={}; 
    if(!email) _errors.email = "Le courriel est obligatoire"; 

    this.setState({errors : _errors}); 
    return Object.keys(_errors).length === 0; 
  } 
  
  render() {
    return (
      <> 
        {
          // Formulaire de connexion
        }

        <Container fluid className="">
            <Row className="my-5 py-5 mx-xl-5 px-xl-5">
                <Col xl="4" className="">
                  <h1 className="mb-5">Identification</h1>
                  <Form>
                  <Form.Group controlId="email">
                <Form.Label>Courriel</Form.Label>
                <Form.Control type="email" placeholder="Courriel" required isInvalid={!!this.state.errors.email}/>
                <Form.Control.Feedback type="invalid"> 
                  {this.state.errors.email} 
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe"/>
              </Form.Group>
                      <Button variant="primary" required onClick={this.props.onClick}>
                          Submit
                      </Button>
                  </Form> 
                </Col>


                <Col xl="1" className=""></Col>


                {
                   // Formulaire nouvel utilisateur (disabled - non terminé)
                }

                <Col xl="7" className="">
                  <h1 className="mb-5">Nouvel utilisateur</h1>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Courriel</Form.Label>
                        <Form.Control type="email" placeholder="Courriel" disabled required isInvalid={!!this.state.errors.email}/>
                        <Form.Control.Feedback type="invalid"> 
                          {this.state.errors.email} 
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" required disabled/>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridNom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control disabled/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPrenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control disabled/>
                      </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" disabled>
                      Submit
                    </Button>
                  </Form>
                </Col>
            </Row> 
        </Container>
      </>
    ); 
  }
} // export class