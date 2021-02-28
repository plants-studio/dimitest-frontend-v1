import React from 'react';
import styled from 'styled-components';

import { HeaderProps } from '../types';

const Text = styled.div<HeaderProps>`
  font-family: ${(props: HeaderProps) => (props.size === 'Large' ? 'NEXON Football Gothic B' : 'NanumSquare')};
  font-size: ${(props: HeaderProps) => (props.size === 'Large' && '1.6875rem')
    || (props.size === 'Medium' && '1rem')
    || (props.size === 'Small' && '0.625rem')};
  font-weight: ${(props: HeaderProps) => (props.size === 'Small' ? 'bold' : 'normal')};
  color: ${(props: HeaderProps) => props.size !== 'Large' && '#CBCBCB'};
`;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => <Text {...props} />;

export default Header;
