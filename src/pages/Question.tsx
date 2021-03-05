import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
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
  align-items: center;
  flex-direction: column;
`;

const Question: React.FC = () => {
  const maxValue = 10;
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState(['', '']);
  const [{ name, gender }, setCookie] = useCookies(['name', 'gender', 'result']);
  const questionList = useRef<QuestionList>([]);
  const refValue = useRef<number>(0);
  const result = useRef<any[]>([]);
  const chapter = useRef<number>(1);
  const history = useHistory();

  useEffect(() => {
    if (!name || !gender) {
      history.push('/');
      return;
    }
    axios.post('https://api.dimitest.me/api/question/ch1').then((data) => {
      questionList.current = data.data.data;
      setText(questionList.current[0].question);
      setAnswer(questionList.current[0].answer.map((v) => v.text));
    });
  }, []);

  const tryable = (closure: Function, catchCallback: Function) => {
    closure((callback: Function) => () => {
      try {
        callback();
      } catch (e) {
        catchCallback(e);
      }
    });
  };

  const next = () => {
    let worked = false;
    const pages: any = document.getElementsByClassName('page');
    refValue.current += 1;
    setValue(refValue.current);
    tryable(
      (catchable: Function) => {
        for (let i = 0; i < pages.length; i += 1) {
          const page = pages[i];
          page.blur();
          page.disabled = true;
          setTimeout(() => {
            page.style.opacity = '0';
            setTimeout(
              catchable(() => {
                setText(questionList.current[refValue.current].question);
                setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
                page.style.opacity = '1';
                page.disabled = false;
              }),
              500,
            );
          }, 300);
        }
      },
      () => {
        if (worked) {
          return;
        }

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
          worked = true;
          axios
            .post(`https://api.dimitest.me/api/question/ch${chapter.current}`, {
              result: result.current,
            })
            .then((data) => {
              questionList.current = questionList.current.concat(data.data.data);
              setText(questionList.current[refValue.current].question);
              setAnswer(questionList.current[refValue.current].answer.map((v) => v.text));
              for (let i = 0; i < pages.length; i += 1) {
                const page = pages[i];
                page.style.opacity = '1';
                page.disabled = false;
              }
              worked = false;
            });
          result.current = [];
        } else {
          axios
            .post('https://api.dimitest.me/api/question/result', {
              result: result.current,
              name,
              gender,
            })
            .then((data) => {
              history.push(`/result/${data.data.data}`);
            });
        }
      },
    );
  };

  return (
    <Wrapper>
      <Container>
        <ProgressBar style={{ marginTop: '50px' }} value={value} maxValue={maxValue} />
        <Text className="page" style={{ marginTop: '20vh', marginBottom: '20vh' }}>
          {text}
        </Text>
        {answer.map((a, i) => (
          <ChoiceButton
            className="page"
            style={{ marginBottom: i === answer.length ? '200px' : '10px' }}
            onClick={() => {
              if (questionList.current[value].answer[i].score[0].num === 0) {
                next();
              } else {
                result.current = result.current.concat(questionList.current[value].answer[i].score);
                if (result.current.length === 12) {
                  setCookie('result', result.current);
                }
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
