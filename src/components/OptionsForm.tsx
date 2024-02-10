import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Option from "./Option";

const OptionsForm = ({ onSubmit }: { onSubmit: Function }) => {
  const [options, setOptions] = useState([""]);

  const addOption = () => setOptions([...options, ""]);

  const removeOption = (idx: number) => () => {
    const opts = [...options];
    opts.splice(idx, 1);
    setOptions(opts);
  };

  const editOption = (idx: number) => (val: string) => {
    const opts = [...options];
    opts[idx] = val;
    setOptions(opts);
  };

  return (
    <Container className="form-container bit-card">
      <h1>Decision App!</h1>
      <h2>Enter all options you want to decide on</h2>
      <hr className="bit-hr" />
      <Row>
        <Col sm={1} />
        <Col sm={10}>
          {options.map((option, idx) => (
            <Option
              key={idx}
              number={idx + 1}
              value={options[idx]}
              removeOption={removeOption(idx)}
              editOption={editOption(idx)}
            />
          ))}
          <Row>
            <Col>
              <button className="bit-button" onClick={addOption}>
                +
              </button>
            </Col>
          </Row>
          <Row>
            <Col sm={10} />
            <Col sm={2}>
              <button className="bit-button" onClick={() => onSubmit(options)}>
                Submit
              </button>
            </Col>
          </Row>
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  );
};

export default OptionsForm;
