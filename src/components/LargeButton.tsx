import React from 'react';
import styled from 'styled-components';

import { LargeButtonProps } from '../types';

const Button = styled.button<LargeButtonProps>`
  max-width: 283px;
  background-color: #70c67e;
  border: none;
  width: 80%;
  height: 50px;
  font-size: 1rem;
  color: #ffffff;
  border-radius: 5px;
  font-family: 'NEXON Football Gothic B';
`;

const LargeButton: React.FC<LargeButtonProps> = (props: LargeButtonProps) => (
  <Button type="button" {...props} />
);

export default LargeButton;
