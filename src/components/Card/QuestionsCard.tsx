import { Questions } from "../../types/questions";

interface QuestionProps {
  questionsData: Questions;
}

export const QuestionsCard = ({ questionsData }: QuestionProps) => {
  const { id, question, possibleAnswers, correctAnswer } = questionsData;

  return (
    <div>
      <h1>{question}</h1>
      <p>{possibleAnswers.toString()}</p>
      <p>{correctAnswer}</p>
    </div>
  );
};
