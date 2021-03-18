import React from "react";
//import {Container, Row, Col} from "react-bootstrap";
import  Footer  from "../Bases/Footer";
import  {Affiche}  from "../Affiche";
import  {Top}  from "../Bases/Top";
import  {Textes}  from "../Textes";


export class Apropos extends React.Component {


    render() {
        return (
            <> 
                    
                <Top box="header2"></Top>

                {
                    // Your comment goes in here.
                }


                <Textes/>

                {
                    // Your comment goes in here.
                }

                <Affiche/>

                {
                    // Your comment goes in here.
                }
               
                <Footer/>
            </>
        ); 
    }
}

