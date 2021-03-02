import React from 'react';
import styled from 'styled-components';

import { CommentProps } from '../types';

const Container = styled.div<CommentProps>`
  max-width: 290px;
  width: 80%;
  height: 1.5625rem;
  font-family: 'NEXON Football Gothic L';
  font-size: 0.875rem;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Comment: React.FC<CommentProps> = (props: CommentProps) => <Container {...props} />;

export default Comment;
