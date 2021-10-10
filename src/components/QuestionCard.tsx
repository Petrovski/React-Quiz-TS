import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

export interface Props {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
  category: string;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions, category }) => (
    <Wrapper>
      <p className="number">
        Question: <strong>{questionNumber} / {totalQuestions}</strong>
      </p>
      <p className="category">Category: <strong>{category}</strong></p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span>{answer}</span>
            </button>
          </ButtonWrapper>
          )
        })}
    </Wrapper>
)

export default QuestionCard;