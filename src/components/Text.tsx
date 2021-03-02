import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../types';

const Div = styled.div`
  font-family: 'NEXON Football Gothic B';
  font-size: 1rem;
  width: 100%;
  text-align: center;
`;

const Text: React.FC<TextProps> = (props: TextProps) => <Div {...props} />;

export default Text;
