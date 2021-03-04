import React from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

import ChoiceButton from '../components/ChoiceButton';
import KakaoShareButton from '../components/KakaoShareButton';
import RowBoxGraph from '../components/RowBoxGraph';
import resultData from '../result.json';
import { ResultProps } from '../types';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
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

const Top = styled.div`
  font-family: 'NanumSquare';
  font-size: 1rem;
  font-weight: bold;
  color: #868686;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Illust = styled.img`
  width: 80%;
  height: auto;
  border: 3px solid #cee7cf;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const Type = styled.div`
  font-family: 'NanumSquare';
  font-size: 1rem;
  font-weight: 800;
  color: #70c67e;
`;

const Name = styled.div`
  font-family: 'NEXON Football Gothic B';
  font-size: 1.875rem;
  margin-bottom: 32px;
`;

const GraphSub = styled.div`
  font-family: 'NanumSquare';
  font-size: 0.9375rem;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-family: 'NanumSquare';
  font-size: 1rem;
  margin-bottom: 52px;
  word-break: keep-all;
`;

const SimilarSub = styled.div`
  font-size: 'NanumSquare';
  font-size: 0.875rem;
  margin-bottom: 22px;
`;

const Similar = styled.div`
  font-family: 'NanumSquare';
  font-size: 1rem;
  color: #868686;
  margin-bottom: 32px;
  word-break: keep-all;
  text-align: center;
`;

const Result: React.FC<ResultProps> = (props: ResultProps) => {
  const { match } = props;
  const [{ name, result }] = useCookies(['name', 'result']);

  const score: any = { developer: 0, designer: 0, manager: 0 };
  result.forEach((v: any) => {
    score[v.type] += v.num;
  });

  return (
    <Wrapper>
      <Container>
        <Top>
          {name}
          님의 IT성향은
        </Top>
        <Illust src={`/images/${match.params.tendency}.svg`} alt={match.params.tendency} />
        <Type>{resultData[match.params.tendency].type}</Type>
        <Name>{resultData[match.params.tendency].name}</Name>
        <GraphSub>나의 IT성향 그래프</GraphSub>
        <RowBoxGraph
          developer={score.developer}
          designer={score.designer}
          manager={score.manager}
          style={{ marginBottom: '38px' }}
        />
        <Description>{resultData[match.params.tendency].description}</Description>
        <SimilarSub>나와 관련있는 다른 IT성향은?</SimilarSub>
        <Similar>{resultData[match.params.tendency].similar.join(', ')}</Similar>
        <ChoiceButton style={{ marginBottom: '5px' }}>선배님과 익명으로 상담해보기</ChoiceButton>
        {/* <ChoiceButton style={{ marginBottom: '106px' }}>친구들에게 내 결과 공유하기</ChoiceButton> */}
        <KakaoShareButton name={name} tendency={match.params.tendency} />
      </Container>
    </Wrapper>
  );
};

export default Result;
