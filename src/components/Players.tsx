import React from "react";
import { Container, Row, Col } from "react-grid-system";

const Players = ({ letsGo, players, setPlayers }: { letsGo: Function, players: number, setPlayers: Function }) => {
  return (
    <Container className="bit-card">
      <h1>Decision App!</h1>
      <hr className="bit-hr" />
      <Row>
        <Col>
          <p>Number of players</p>
        </Col>
      </Row>
      <Row>
        <Col sm={4} />
        <Col sm={1}>
          <button
            className="bit-button"
            onClick={() => setPlayers(players - 1)}
          >
            -
          </button>
        </Col>
        <Col sm={2}>
          <p>{players}</p>
        </Col>
        <Col sm={1}>
          <button
            className="bit-button"
            onClick={() => setPlayers(players + 1)}
          >
            +
          </button>
        </Col>
        <Col sm={4} />
      </Row>
      <Row>
        <Col sm={10} />
        <Col sm={2}>
          <button className="bit-button submit" onClick={() => letsGo()}>
            Let's Go
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Players;
