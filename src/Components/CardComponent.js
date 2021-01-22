import React, { Component } from "react";
import "../Bootstrap/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Card Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Card text: Lorem ipsum dolor sit amet.</Card.Text>
            <Button>Primary Button</Button>
          </Card.Body>
          <Card.Footer>Card footer</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Cards;
