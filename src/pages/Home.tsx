import React from 'react';
import styled from 'styled-components';

import LargeButton from '../components/LargeButton';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 360px;
  justify-content: center;
`;

const Home: React.FC = () => (
  <>
    <Wrapper>
      <Container>
        <LargeButton>시작하기</LargeButton>
      </Container>
    </Wrapper>
  </>
);

export default Home;
