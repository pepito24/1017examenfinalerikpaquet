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

                <Col xl="7" className="">
                  <h1 className="mb-5">Nouvel utilisateur</h1>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Courriel</Form.Label>
                        <Form.Control type="email" placeholder="Courriel" required isInvalid={!!this.state.errors.email}/>
                        <Form.Control.Feedback type="invalid"> 
                          {this.state.errors.email} 
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" required/>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Col>
            </Row> 
        </Container>
      </>
    ); 
  }
}