import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ChoiceButton from '../components/ChoiceButton';
import Comment from '../components/Comment';
import Header from '../components/Header';
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
  max-height: 812px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
`;

const Highlight = styled.span`
  color: #70c67e;
`;

const LinkEx = styled(Link)`
  color: #cbcbcb;
  transition: color 0.2s ease;

  &:hover {
    color: #404040;
  }
`;

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <Background alt="background" src="/images/background.png" />
      <Header size="Large">
        <Highlight>DIMI</Highlight>
        TI 테스트
      </Header>
      <Header size="Medium">DIMI + MBTI TEST</Header>
      <Comment>
        자신의
        {' '}
        <Highlight>IT 성향</Highlight>
        과
        {' '}
        <Highlight>직업</Highlight>
        을 파악할 수 있는
        테스트입니다.
      </Comment>
      <Comment>
        총
        {' '}
        <Highlight>24문항</Highlight>
        으로 약
        {' '}
        <Highlight>8분</Highlight>
        의 시간이 소요됩니다.
      </Comment>
      <Comment>
        질문을 깊게 생각하지 마시고
        {' '}
        <Highlight>마음이 끌리는대로</Highlight>
      </Comment>
      <Comment>
        <Highlight>직관적으로 선택</Highlight>
        해주세요!
      </Comment>
      <LargeButton>시작하기</LargeButton>
      <Header size="Small">
        서비스를 이용하면
        {' '}
        <LinkEx to="/tos">이용약관</LinkEx>
        에 동의하는 것으로 간주합니다
      </Header>
      <ChoiceButton>신박하고 재미있는 게임 아이디어를 구상한다.</ChoiceButton>
    </Container>
  </Wrapper>
);

export default Home;
