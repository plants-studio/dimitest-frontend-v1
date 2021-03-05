import React, { useRef } from 'react';
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
  transition: opacity 0.5s ease, color 0.3s ease, border 0.3s ease;
`;

const ChoiceButton: React.FC<ChoiceButtonProps> = (props: ChoiceButtonProps) => {
  const { onClick, ...other } = props;
  const button = useRef<HTMLButtonElement>(null);

  return (
    <Button
      type="button"
      onClick={() => {
    button.current!.style.color = '#70c67e';
    button.current!.style.border = 'solid 1px #70c67e';
    setTimeout(() => {
      if (onClick) { onClick(); }
      button.current!.style.color = '#9fb0c4';
      button.current!.style.border = 'solid 1px #9fb0c4';
    }, 300);
      }}
      {...other}
      ref={button}
    />
  );
};

export default ChoiceButton;
