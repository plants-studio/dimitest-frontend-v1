import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../types';

const Div = styled.div`
  font-family: 'NEXON Football Gothic B';
  font-size: 1.125rem;
  width: 100%;
  text-align: center;
  word-break: keep-all;
  line-height: 1.65rem;
  transition: opacity 0.5s ease;
`;

const Text: React.FC<TextProps> = (props: TextProps) => <Div {...props} />;

export default Text;
