import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { ProgressBarProps } from '../types';

const Container = styled.span`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  font-family: 'NEXON Football Gothic B';
  font-size: 0.875rem;
  color: #eaeaea;
  margin-left: auto;
  margin-right: 1.75rem;
  margin-top: 0.4rem;
`;

const Background = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 5px;
  border-radius: 3px;
`;

const Bar = styled.div`
  background-color: #70c67e;
  height: 5px;
  border-radius: 3px;
  transition: width 0.3s ease-out;
`;

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { value, maxValue, style } = props;
  const bar = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    bar.current!.style.width = `${(value / maxValue) * 100}%`;
    label.current!.textContent = `${value} / ${maxValue}`;
  }, [value]);

  return (
    <Container style={style}>
      <Background>
        <Bar ref={bar} />
      </Background>
      <Label ref={label}>
        {value}
        {' '}
        /
        {maxValue}
      </Label>
    </Container>
  );
};

export default ProgressBar;
