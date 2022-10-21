import styled from 'styled-components';
import { useState } from 'react';

export default function InputNumber({ amount }) {
  const [inputQtd, setInputQtd] = useState(amount);
  const attValue = e => {
    setInputQtd(e.target.value);
  };
  return (
    <InputNumberStyle
      type="number"
      name="qtd"
      className="inputQntd"
      value={inputQtd}
      onChange={attValue}
      required
      disabled={inputQtd <= 1}
      stateInput={inputQtd <= 1 ? true : false}
      min={1}
    />
  );
}

const InputNumberStyle = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 4px;
  padding-left: 12px;
  height: 35px;

  background: ${props => (props.stateInput ? '#E5E5E5' : '#ffffff')};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: ${props => (props.stateInput ? '#8F8F8F' : '#000000')};
  @media screen and (min-width: 700px) {
    padding-left: 4px;
  }
`;
