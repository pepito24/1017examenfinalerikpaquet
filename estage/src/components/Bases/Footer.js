import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import {Link} from 'react-router-dom';


function Footer() {
    return (
      <>      
        <Container fluid className="footer mt-5 pt-5">
            <Row className="mb-3 mt-5 pt-3">
                <Col xl="2" lg="0"></Col>
                <Col xl="8" lg="12">
                    <h4>Ils sont à la recherche d'un stage :</h4>
                </Col>
                <Col xl="2" lg="0"></Col>
            </Row>
            
            <Row className="mb-5 pb-5">
                <Col xl="2" lg="0"></Col>
                <Col xl="2" lg="3">
                <ul class="list-unstyled text-small">
                <li><a href="https://www.google.ca/?hl=fr">Graphic design</a></li>
                <li><a href="https://www.google.ca/?hl=fr">Designer jobs</a></li>
                <li><a class="active" href="https://www.google.ca/?hl=fr">Frontend Developer jobs</a></li>
                <li><a href="https://www.google.ca/?hl=fr">Developer jobs</a></li>
                </ul>
                </Col>
                <Col xl="2" lg="3">
                <ul class="list-unstyled text-small">
                    <li><a href="https://www.google.ca/?hl=fr">Resources jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Marketing online jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Mobile Developer jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">App Developer jobs</a></li>
                </ul>
                </Col>
                <Col xl="2" lg="3">
                <ul class="list-unstyled text-small">
                    <li><a href="https://www.google.ca/?hl=fr">Product Manager jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Sales jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Logo design jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Seo jobs</a></li>
                </ul>
                </Col>
                <Col xl="2" lg="3">
                <ul class="list-unstyled text-small">
                    <li><a href="https://www.google.ca/?hl=fr">Articles jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Android jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Logo design jobs</a></li>
                    <li><a href="https://www.google.ca/?hl=fr">Seo jobs</a></li>
                </ul>
                </Col>
                <Col xl="2" lg="0"></Col>
            </Row>
            <Row className="footer-bottom py-5">
                <Col xl="4" lg="12" className="copyright">
                    <p className="ml-xl-5 ml-md-0 pl-xl-5 pl-md-0">© 2021  <a href="https://www.google.ca/?hl=fr">EnStage</a> - Projet éducationnel</p>
                </Col>
                <Col xl="8" lg="12" className="pr-xl-5 pr-md-0 menu">
                    <p className="pr-xl-5 pr-md-0">
                        <Link exact to="/" className="">Accueil</Link>
                        <Link exact to="/apropos" className="">À propos</Link>
                        <a href="https://www.google.ca/?hl=fr">Confidentialite</a>
                        <a href="https://www.google.ca/?hl=fr">Nous joindre</a>
                        <Link exact to="/connecter" className="">Partenaires</Link>
                    </p>
                </Col>
                
            </Row>
        </Container>
    </>
    );
}

export default Footer;