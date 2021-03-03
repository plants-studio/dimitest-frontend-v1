import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

import ChoiceButton from '../components/ChoiceButton';
import ProgressBar from '../components/ProgressBar';
import Text from '../components/Text';
import { QuestionList } from '../types';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-image: url('/images/school.png');
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Container = styled.div`
  display: flex;
  max-width: 288px;
  width: 80%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const Question: React.FC = () => {
  const maxValue = 10;
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState(['', '']);
  const [{ name, gender }] = useCookies(['name', 'gender']);
  const questionList = useRef<QuestionList>([]);
  const refValue = useRef<number>(0);
  const result = useRef<any[]>([]);
  const chapter = useRef<number>(1);

  useEffect(() => {
    axios.post('https://api.dimitest.me/api/question/ch1').then((data) => {
      questionList.current = data.data.data;
      setText(questionList.current[0].question);
      setAnswer(questionList.current[0].answer.map((v) => v.text));
    });
  }, []);

  const next = () => {
    refValue.current += 1;
    setValue(refValue.current);
    try {
      setText(questionList.current[refValue.current].question);
      setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
    } catch {
      if (
        !(
          chapter.current === 2
          && result.current.findIndex(
            (v: any) => v.type === 'developer' || v.type === 'designer' || v.type === 'manager',
          ) !== -1
        )
      ) {
        chapter.current += 1;
      }

      if (chapter.current !== 5) {
        axios
          .post(`https://api.dimitest.me/api/question/ch${chapter.current}`, {
            result: result.current,
          })
          .then((data) => {
            questionList.current = questionList.current.concat(data.data.data);
            setText(questionList.current[refValue.current].question);
            setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
          });
        result.current = [];
      } else {
        axios
          .post('https://api.dimitest.me/api/question/result', {
            result: result.current,
            name,
            gender,
          })
          .then((res) => {
            console.log(res);
          });
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <ProgressBar style={{ marginTop: '50px' }} value={value} maxValue={maxValue} />
        <Text style={{ marginTop: '20vh', marginBottom: '20vh' }}>{text}</Text>
        {answer.map((a, i) => (
          <ChoiceButton
            style={{ marginBottom: i === answer.length ? '200px' : '10px' }}
            onClick={() => {
              if (questionList.current[value].answer[i].score[0].num === 0) {
                next();
              } else {
                result.current = result.current.concat(questionList.current[value].answer[i].score);
                next();
              }
            }}
          >
            {a}
          </ChoiceButton>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Question;
