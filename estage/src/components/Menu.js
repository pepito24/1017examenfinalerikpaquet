import React from "react";
import {Col, Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGraduationCap, faArrowCircleRight, faArrowAltCircleLeft, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

export class Menu extends React.Component {
  render() {
    return (
        <> 
            <Col xl="2" lg="12" className="menu-connecter">
                <h2 className="mx-4 my-3  text-white">eStage</h2>
                <Navbar collapseOnSelect expand="xl" variant="dark">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav defaultActiveKey="/home" className="flex-column">
                        <Link exact to="/" className=""><FontAwesomeIcon icon={faHome} />Accueil</Link>
                        <Link exact to="/" className=""><FontAwesomeIcon icon={faArrowCircleRight} />Offres de stage</Link>
                        <Link exact to="/" className=""><FontAwesomeIcon icon={faArrowAltCircleLeft} />Demandes de stage</Link>
                        <Link exact to="/" className=""><FontAwesomeIcon icon={faGraduationCap} />Candidats</Link>
                        <Link exact to="/" className=""><FontAwesomeIcon icon={faUser} />Entreprises</Link>
                        <Link exact to="/" className="deco"><FontAwesomeIcon icon={faDoorOpen} />Déconnexion</Link>
                      </Nav>
                  </Navbar.Collapse> 
                </Navbar> 
            </Col>
        </>
    ); 
  }
}