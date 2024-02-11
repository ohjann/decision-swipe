import React, { useRef, useEffect } from "react";
import { Row, Col } from "react-grid-system";

const Option = ({
  number,
  value,
  removeOption,
  editOption
}: {
  number: number;
  value: string;
  removeOption: Function;
  editOption: Function;
}) => {
  const ref = useRef<HTMLInputElement>(null);

  // Steal input focus when rendered
  useEffect(
    () => {
      if (ref.current) {
        ref.current.focus();
      }
    },
    []
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    editOption((e.target as HTMLInputElement).value);
  };
  return (
    <Row className="option">
      <Col sm={2} className="label-col">
        <label htmlFor="field-name">Option {number}</label>
      </Col>
      <Col sm={8}>
        <input
          className="bit-input"
          id="field-name"
          type="text"
          value={value}
          onChange={handleChange}
          ref={ref}
        />
      </Col>
      <Col sm={2}>
        <button
          className="bit-button"
          onClick={() => removeOption(number - 1)}
          tabIndex={-1}
        >
          -
        </button>
      </Col>
    </Row>
  );
};

export default Option;
