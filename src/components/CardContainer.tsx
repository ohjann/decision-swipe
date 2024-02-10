import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./Card";

const CardContainer = ({ options }: { options: string[] }) => {
  const [leftSwipes, setLeftSwipes] = useState<string[]>([]);
  const [rightSwipes, setRightSwipes] = useState<string[]>([]);

  const handleSwipe = (option: string, direction: string) => {
    if (direction === "left") {
      setLeftSwipes([...leftSwipes, option]);
    } else if (direction === "right") {
      setRightSwipes([...rightSwipes, option]);
    }
  };

  if (leftSwipes.length + rightSwipes.length === options.length) {
    return (
      <Container className="bit-card">
        <Row>
          <Col>
            <h2>Left Swipes</h2>
            <ul>
              {leftSwipes.map((swipe, idx) => (
                <li key={`${swipe}-${idx}`}>{swipe}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Right Swipes</h2>
            <ul>
              {rightSwipes.map((swipe, idx) => (
                <li key={`${swipe}-${idx}`}>{swipe}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="card-container">
        {options.map((option, idx) => (
          <Card key={idx} option={option} handleSwipe={handleSwipe} />
        ))}
      </div>
    );
  }
};

export default CardContainer;
