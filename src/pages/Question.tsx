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
  const maxValue = 24;
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState(['', '']);
  const [{ name, gender }] = useCookies(['name', 'gender']);
  const questionList = useRef<QuestionList>([]);
  const refValue = useRef<number>(0);
  let result: any[] = [];
  let chapter = 0;

  useEffect(() => {
    chapter = 1;
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
      chapter += 0.5;

      if (chapter === 1.5 || chapter === 2) {
        axios.post('https://api.dimitest.me/api/question/ch2', { result }).then((data) => {
          questionList.current = questionList.current.concat(data.data.data);
          setText(questionList.current[refValue.current].question);
          setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
        });
        if (chapter === 2) {
          result = [];
        }
      } else if (chapter === 2.5 || chapter === 3) {
        axios.post('https://api.dimitest.me/api/question/ch3', { result }).then((data) => {
          questionList.current = questionList.current.concat(data.data.data);
          setText(questionList.current[refValue.current].question);
          setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
        });
        if (chapter === 3) {
          result = [];
        }
      } else {
        axios
          .post('https://api.dimitest.me/api/question/result', {
            result,
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
              result.push(questionList.current[value].answer[i].score);
              result.flat();
              next();
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
