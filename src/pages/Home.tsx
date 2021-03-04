import React, { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Comment from '../components/Comment';
import Header from '../components/Header';
import LargeButton from '../components/LargeButton';
import TextField from '../components/TextField';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-image: url('/images/school.svg');
  background-repeat: no-repeat;
  background-position: bottom;

  @media only screen and (max-width: 1024px) {
    background-size: 100% auto;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 288px;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Label = styled.label`
  display: flex;
  font-family: 'NEXON Football Gothic B';
  font-size: 0.875rem;
  line-height: 20px;
  height: 20px;
  color: #cbcbcb;
  margin-left: 1rem;
  margin-bottom: 63px;
`;

const Radio = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: solid 1px #cbcbcb;
  border-radius: 5px;
  margin: 0;
  margin-right: 0.3rem;
  outline: none;

  &:checked {
    border: none;
    background-color: #70c67e;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/checked.png');
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const Home: React.FC = () => {
  const [, setCookie] = useCookies(['name', 'gender']);
  const [page, setPage] = useState(false);
  const history = useHistory();
  const name = useRef<HTMLInputElement>(null);
  const man = useRef<HTMLInputElement>(null);
  const woman = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <Container>
        {!page ? (
          <>
            <Header size="Large" style={{ marginBottom: '10px' }}>
              <Highlight>디미고인</Highlight>
              {' '}
              IT성향 테스트
            </Header>
            <Header size="Medium" style={{ marginBottom: '71px' }}>
              당신과 잘 어울리는 IT 직군은 무엇일까요?
            </Header>
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
              <Highlight>10문항</Highlight>
              으로 약
              {' '}
              <Highlight>3분</Highlight>
              의 시간이 소요됩니다.
            </Comment>
            <Comment>
              질문을 깊게 생각하지 마시고
              {' '}
              <Highlight>마음이 끌리는대로</Highlight>
            </Comment>
            <Comment style={{ marginBottom: '49px' }}>
              <Highlight>직관적으로 선택</Highlight>
              해주세요!
            </Comment>
          </>
        ) : (
          <>
            <Header size="Large" style={{ marginBottom: '10px' }}>
              당신은
              {' '}
              <Highlight>누구</Highlight>
              인가요?
            </Header>
            <Header size="Medium" style={{ marginBottom: '71px' }}>
              더 나은 결과를 위해 정확히 입력해주세요
            </Header>
            <TextField placeholder="이름을 입력하세요" ref={name} style={{ marginBottom: '8px' }} />
            <RadioWrapper>
              <Label>
                <Radio type="radio" name="gender" ref={man} />
                남자
              </Label>
              <Label>
                <Radio type="radio" name="gender" ref={woman} />
                여자
              </Label>
            </RadioWrapper>
          </>
        )}
        <LargeButton
          style={{ marginBottom: '13px' }}
          onClick={() => {
            if (!page) {
              setPage(true);
            } else if (name.current?.value === null || name.current?.value.match(/^ *$/) !== null) {
              // eslint-disable-next-line
              alert('이름을 정확히 입력해주세요');
            } else if (!man.current?.checked && !woman.current?.checked) {
              // eslint-disable-next-line
              alert('성별을 선택해주세요');
            } else {
              setCookie('name', name.current.value);
              setCookie('gender', man.current?.checked ? '남자' : '여자');
              history.push('/question');
            }
          }}
        >
          시작하기
        </LargeButton>
        <Header size="Small">
          서비스를 이용하면
          {' '}
          <LinkEx to="/tos">이용약관</LinkEx>
          에 동의하는 것으로 간주합니다
        </Header>
      </Container>
    </Wrapper>
  );
};

export default Home;
