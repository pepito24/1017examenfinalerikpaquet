import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

export class Login extends React.Component {
  
  render() {
    return (
        <> 
          <Container fluid className="">
              <Row className="my-5 py-5 mx-xl-5 px-xl-5">
                  <Col xl="4" className="">
                    <h1 className="mb-5">Identification</h1>
                    <Form>
                    <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                        <Button variant="primary" onClick={this.props.onClick}>
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
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" required/>
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" required/>
                      </Form.Group>

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