import React from 'react';
import styled from 'styled-components';

import { LargeButtonProps } from '../types';

const Button = styled.button<LargeButtonProps>`
  background-color: #4fcb63;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  color: #ffffff;
  border-radius: 5px;
  font-family: 'NEXON Football Gothic B';
  cursor: pointer;
  outline: none;
  padding: 0;
`;

const LargeButton: React.FC<LargeButtonProps> = (props: LargeButtonProps) => (
  <Button type="button" {...props} />
);

export default LargeButton;
