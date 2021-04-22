import React from "react";
import {Col, Navbar, Nav, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowAltCircleLeft, faDoorOpen } from '@fortawesome/free-solid-svg-icons';


export class MenuAdmin extends React.Component {
  render() {
    return (
      <> 
        <Col xl="2" lg="12" className="menu-connecter">
          <h2 className="mx-4 my-3  text-white">eStage</h2>
          <Navbar collapseOnSelect expand="xl" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Link onClick={this.props.test}><FontAwesomeIcon icon={faHome} />Accueil</Link>
                <Link onClick={this.props.handleShow}><FontAwesomeIcon icon={faArrowAltCircleLeft} />Demandes de stage</Link>
                <Button variant="danger" className="deco" onClick={this.props.onClick}>
                  <FontAwesomeIcon icon={faDoorOpen} />Déconnexion
                </Button>
              </Nav>
            </Navbar.Collapse> 
          </Navbar> 
        </Col>
      </>
    ); 
  }
}