import React from 'react';
import styled from 'styled-components';

import { ChoiceButtonProps } from '../types';

const Button = styled.button<ChoiceButtonProps>`
  max-width: 295px;
  background-color: transparent;
  border: solid 1px #9fb0c4;
  width: 80%;
  height: 50px;
  font-size: 0.875rem;
  color: #9fb0c4;
  font-family: 'NanumSquare';
`;

const ChoiceButton: React.FC = (props: ChoiceButtonProps) => <Button type="button" {...props} />;

export default ChoiceButton;
