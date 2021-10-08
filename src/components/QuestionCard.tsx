import React from 'react';

interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
      {answers.map(answer => {
        return (
          <div>
          <button disabled={userAnswer} onClick={callback}>
            <span>{answer}</span>
          </button>
        </div>
        )
      })}
  </div>
)

export default QuestionCard;