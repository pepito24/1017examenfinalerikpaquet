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
                        <li><Link exact to="/" className="">Graphic design</Link></li>
                        <li><Link exact to="/" className="">Designer jobs</Link></li>
                        <li><Link exact to="/" className="">Frontend Developer jobs</Link></li>
                        <li><Link exact to="/" className="">Developer jobs</Link></li>
                    </ul>
                </Col>
                <Col xl="2" lg="3">
                    <ul class="list-unstyled text-small">
                        <li><Link exact to="/" className="">Resources jobs</Link></li>
                        <li><Link exact to="/" className="">Marketing online jobs</Link></li>
                        <li><Link exact to="/" className="">Mobile Developer jobs</Link></li>
                        <li><Link exact to="/" className="">App Developer jobs</Link></li>
                    </ul>
                </Col>
                <Col xl="2" lg="3">
                    <ul class="list-unstyled text-small">
                        <li><Link exact to="/" className="">Product Manager jobs</Link></li>
                        <li><Link exact to="/" className="">Sales jobs</Link></li>
                        <li><Link exact to="/" className="">Logo design jobs</Link></li>
                        <li><Link exact to="/" className="">Seo jobs</Link></li>
                    </ul>
                </Col>
                <Col xl="2" lg="3">
                    <ul class="list-unstyled text-small">
                        <li><Link exact to="/" className="">Articles jobs</Link></li>
                        <li><Link exact to="/" className="">Android jobs</Link></li>
                        <li><Link exact to="/" className="">Logo design jobs</Link></li>
                        <li><Link exact to="/" className="">Seo jobs</Link></li>
                    </ul>
                </Col>
                <Col xl="2" lg="0"></Col>
            </Row>
            <Row className="footer-bottom py-5">
                <Col xl="4" lg="12" className="copyright">
                    <p className="ml-xl-5 ml-md-0 pl-xl-5 pl-md-0">© 2021 <Link exact to="/" className="">EnStage</Link> - Projet éducationnel</p>
                </Col>
                <Col xl="8" lg="12" className="pr-xl-5 pr-md-0 menu">
                    <p className="pr-xl-5 pr-md-0">
                        <Link exact to="/" className="">Accueil</Link>
                        <Link exact to="/apropos" className="">À propos</Link>
                        <Link exact to="/confidentialite" className="">Confidentialite</Link>
                        <Link exact to="/contact" className="">Nous joindre</Link>
                        <Link exact to="/admin" className="">Partenaires</Link>
                    </p>
                </Col>  
            </Row>
        </Container>
    </>
    );
}

export default Footer;