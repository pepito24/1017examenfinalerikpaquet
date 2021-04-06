import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {TexteBleu}  from "../TexteBleu";

export class Apropos extends React.Component {
    render() {
        return (
            <>            
                <Top box="header2"></Top>

                <Container fluid className="apropos">
                    <Row className="mx-xl-5 px-xl-5 py-3 my-3">
                        <Col xl="5" lg="12" className="">
                            <img className="image" alt="" src="https://cdn.pixabay.com/photo/2017/07/09/09/25/icon-2486501_960_720.png"/>
                        </Col>
                        <Col xl="7" lg="12" className=" py-xl-5 my-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                        </Col>
                            
                    </Row> 
                    <Row className="mx-xl-5 px-xl-5 pb-xl-5 imgs text-center">   
                        <Col xl="4" lg="12" className="pr-xl-2">
                            <img alt="" src="https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364_960_720.jpg"/>
                            <h5 className="my-4">eStage</h5>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                        </Col>
                        <Col xl="4" lg="12" className="pr-xl-2">
                            <img alt="" src="https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364_960_720.jpg"/>
                            <h5 className="my-4">eStage</h5>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                        </Col>
                        <Col xl="4" lg="12" className="">
                            <img alt="" src="https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364_960_720.jpg"/>
                            <h5 className="my-4">eStage</h5>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                        </Col>     
                    </Row> 
                </Container>

                <TexteBleu/>

                <Affiche/>
               
                <Footer/>
            </>
        ); 
    }
}

