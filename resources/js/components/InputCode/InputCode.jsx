import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './InputCode.scss';
import { Form } from 'react-bootstrap';

const InputCode = ({
  valueVerify,
  setValueVerify,
  length,
  loading,
  onChange,
  isValid,
  messenger,
}) => {
  const [code, setCode] = useState([...Array(length)].map(() => ''));
  const inputs = useRef([]);
  const [value, setValue] = useState(valueVerify);
  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    setValue(newCode);
    console.log('value', value);
    setValueVerify(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== '')) {
      onChange(newCode.join(''));
    }
  };
  useEffect(() => {
    setValue(valueVerify);
  }, [valueVerify]);

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = '';
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-input-box d-flex ">
        {code.map((num, idx) => {
          return (
            <Form.Control
              key={idx}
              type="text"
              maxLength={1}
              value={num}
              readOnly={loading}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
              className="input-numbers m-2 text-center fs-5"
              isInvalid={isValid}
            />
          );
        })}
      </div>
      <Form.Control.Feedback className="invalid-feedback-number fs-3 ms-2" type="invalid">
        {messenger}
      </Form.Control.Feedback>
    </div>
  );
};
InputCode.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  isValid: PropTypes.bool,
  valueVerify: PropTypes.string,
  setValueVerify: PropTypes.func,
  messenger: PropTypes.string,
};

export default InputCode;
