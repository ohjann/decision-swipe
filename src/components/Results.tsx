import React from "react";
import { Container, Row, Col } from "react-grid-system";

const Results = ({ leftSwipes }: { leftSwipes: string[] }) => {
  return (
    <Container className="bit-card results">
      {leftSwipes.length ? (
        <>
          <h2>You all agreed on:</h2>
          <Row>
            <Col md={4} />
            <Col md={4}>
              <ul>
                {leftSwipes.map((swipe, idx) => (
                  <li key={`${swipe}-${idx}`}>{swipe}</li>
                ))}
              </ul>
            </Col>
            <Col md={4} />
          </Row>
        </>
      ) : (
        <>
          <h2>You didn't agree on anything!</h2>
          <h3>:(</h3>
        </>
      )}
    </Container>
  );
};

export default Results;
