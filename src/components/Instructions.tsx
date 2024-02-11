import React from "react";
import { Container, Row, Col } from "react-grid-system";

const Instructions = ({ gotIt }: { gotIt: Function }) => {
  return (
    <Container className="bit-card">
      <h1>Decision App!</h1>
      <hr className="bit-hr" />
      <Row>
        <Col md={3} />
        <Col md={6}>
          <ol>
            <li>Enter your options</li>
            <li>Select number of players</li>
            <li>Swipe your way to a decision</li>
          </ol>
        </Col>
        <Col md={3} />
      </Row>
      <button className="bit-button" onClick={() => gotIt()}>
        Got it
      </button>
    </Container>
  );
};

export default Instructions;
