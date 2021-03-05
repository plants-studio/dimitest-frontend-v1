import React from 'react';
import styled from 'styled-components';

import { ChoiceButtonProps } from '../types';

const Button = styled.button<ChoiceButtonProps>`
  background-color: transparent;
  border: solid 1px #9fb0c4;
  width: 100%;
  height: 60px;
  font-size: 0.937rem;
  color: #9fb0c4;
  border-radius: 5px;
  font-family: 'NanumSquare';
  transition: border 0.3s ease, color 0.3s ease;
  outline: none;
  padding: 8px;
  word-break: keep-all;
  line-height: 1.25rem;
  cursor: pointer;
`;

const ChoiceButton: React.FC<ChoiceButtonProps> = (props: ChoiceButtonProps) => (
  <Button type="button" {...props} />
);

export default ChoiceButton;
