import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
  handleDeconnexion() {
    this.props.onClick(false);
  }
  render() {
    return (
      <Button variant="danger" onClick={() => this.handleDeconnexion()}>
        Déconnexion
      </Button>
    );
  }
}