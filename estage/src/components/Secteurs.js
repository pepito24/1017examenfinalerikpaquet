import React from "react";
import {ListGroup} from "react-bootstrap";
import {Col} from "react-bootstrap";

export class Secteurs extends React.Component {

    constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }
  
  // Gérer l'accès API
  async componentDidMount() {
      try {
        const response = await fetch("https://peaceful-headland-60327.herokuapp.com/api/activite");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }


    render() {
        return (
            <> 
                <Col xl="12" className="">
                    <h5>Secteurs d'activité</h5>
                    <ListGroup className="mt-4">
                        {this.state.donneesRecues.map((key,c) => (
                            <ListGroup.Item>
                            <p> {key.nom} </p>
                            </ListGroup.Item>
                        ))}  
                    </ListGroup>
                </Col>  
            </>
        ); 
    }
}