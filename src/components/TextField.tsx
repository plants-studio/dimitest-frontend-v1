import React from 'react';
import styled from 'styled-components';

import { TextFieldProps } from '../types';

const Input = styled.input`
  background-color: transparent;
  border: solid 1px #cbcbcb;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 5px;
  font-family: 'NEXON Football Gothic B';
  transition: border 0.3s ease, color 0.3s ease;
  text-align: center;
  outline: none;
  -webkit-appearance: none;
  padding: 0;

  &::placeholder {
    color: #cbcbcb;
  }

  &:focus {
    border: solid 1px #70c67e;
    color: #70c67e;
  }
`;

const TextField: React.FC<TextFieldProps> = React.forwardRef(
  (props: TextFieldProps, ref: React.ForwardedRef<HTMLInputElement>) => (
    <Input type="text" ref={ref} {...props} />
  ),
);

export default TextField;
