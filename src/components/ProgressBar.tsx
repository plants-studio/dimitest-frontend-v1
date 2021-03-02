import React, { useState } from 'react';
import styled from 'styled-components';

import { BarProps } from '../types';

const Label = styled.span`
  font-family: 'NEXON Football Gothic B';
  font-size: 0.875rem;
  color: #eaeaea;
`;

const Background = styled.div`
  background-color: #eaeaea;
  max-width: 295px; 
  max-width: 295px; 
  width: 80%;
  height: 5px;
  border-radius: 3px;
`;

const Bar = styled.div<BarProps>`
  background-color: #70c67e;
  max-width: 295px;
  width: 80%;
  height: 5px;
  border-radius: 3px;
  transform: translateX(${(props: BarProps) => (props.value / props.maxValue) * 100}%);
`;

const ProgressBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  return <></>;
};

export default ProgressBar;
