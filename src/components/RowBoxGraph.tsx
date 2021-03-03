import React from 'react';
import styled from 'styled-components';

import { RowBoxGraphProps } from '../types';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GraphSub = styled.div`
  display: flex;
  margin-top: 11px;
`;

const Label = styled.span`
  font-family: 'NanumSquare';
  font-weight: 800;
  font-size: 0.875rem;
  text-align: right;
  margin-right: 0.2rem;
  margin-top: 8px;
`;

const Graph = styled.div<{ type: number }>`
  background-color: ${({ type }: { type: number }) => (type === 2 && '#70c67e') || (type === 1 && '#cbcbcb') || '#eaeaea'};
  width: 18px;
  height: 14px;
  border-radius: 2px;
  margin-right: 1px;
`;

const RowBoxGraph: React.FC<RowBoxGraphProps> = (props: RowBoxGraphProps) => {
  const {
    developer, designer, manager, style,
  } = props;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container style={style}>
      <Wrapper>
        <Label>개발자</Label>
        <Label>디자이너</Label>
        <Label>기획자</Label>
      </Wrapper>
      <Wrapper>
        <GraphSub>
          {arr.map((a) => {
            if (a <= developer) {
              if (developer === Math.max(developer, designer, manager)) {
                return <Graph type={2} />;
              }
              return <Graph type={1} />;
            }
            return <Graph type={0} />;
          })}
        </GraphSub>
        <GraphSub>
          {arr.map((a) => {
            if (a <= designer) {
              if (designer === Math.max(developer, designer, manager)) {
                return <Graph type={2} />;
              }
              return <Graph type={1} />;
            }
            return <Graph type={0} />;
          })}
        </GraphSub>
        <GraphSub>
          {arr.map((a) => {
            if (a <= manager) {
              if (manager === Math.max(developer, designer, manager)) {
                return <Graph type={2} />;
              }
              return <Graph type={1} />;
            }
            return <Graph type={0} />;
          })}
        </GraphSub>
      </Wrapper>
    </Container>
  );
};

export default RowBoxGraph;
