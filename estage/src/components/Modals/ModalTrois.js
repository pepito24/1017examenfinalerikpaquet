import React from "react";
import { Button,Modal } from "react-bootstrap";

export class ModalTrois extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Supprimer la demande</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            <Button variant="secondary" onClick={this.props.supprimer}>
              Supprimer
            </Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }
}
