import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-grid-system";
import Option from "./Option";
import useListenForEnterKey from "../hooks/useListenForEnterKey";

const OptionsForm = ({ onSubmit }: { onSubmit: Function }) => {
  const [options, setOptions] = useState([""]);

  const addOption = useCallback(() => setOptions([...options, ""]), [
    setOptions,
    options
  ]);

  useListenForEnterKey(addOption);

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
      <hr className="bit-hr" />
      <p>Enter all options you want to decide on:</p>
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
              <button className="bit-button" onClick={addOption} tabIndex={-1}>
                +
              </button>
            </Col>
          </Row>
          <Row>
            <Col md={10} sm={8}/>
            <Col md={2} sm={2} >
              <button className="bit-button submit" onClick={() => onSubmit(options)}>
                Submit
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <sub>Tip: Use the "Enter" and "Tab" keys to input quickly</sub>
            </Col>
          </Row>
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  );
};

export default OptionsForm;
