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

  const handleSubmit = () => {
    const filteredOptions = options.filter(o => o && o !== "");
    if (filteredOptions.length > 1) {
      onSubmit(filteredOptions);
    }
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
          <button
            className={`bit-button submit full-width ${
              options.filter(o => o && o !== "").length < 2 ? "inadequate" : ""
            }`}
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </button>
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
