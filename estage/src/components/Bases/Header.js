import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom' 

export class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg"  variant="dark">

          <Link exact to="/">
            <Navbar.Brand className="mr-5 ml-lg-5 mt-2">
                <h2>eStage</h2>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
            <Nav className="mr-auto mt-2">
              <Link exact to="/stages" className="btn btn-success ml-lg-5 mr-lg-2">Trouvez votre stage</Link>
              <Link exact to="/candidats" className="btn btn-success">Trouvez votre futur stagiaire</Link>   
            </Nav>

            <Nav className="mr-lg-5 mt-2">
              <Link hexact to="/connexion" className="btn btn-light mr-lg-2">Connexion</Link>
              <Link eventKey={2} exact to="/connexion" className="btn btn-dark mr-lg-5">Inscription</Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}