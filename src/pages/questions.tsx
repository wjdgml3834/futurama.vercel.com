import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Questions } from "../types/questions";

const QuestionsPage: NextPage = () => {
  const { data, error } = useFuturamaData("questions");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Questions</h1>
      <main>
        {data.map((questionsData: Questions) => {
          const { id, question, possibleAnswers, correctAnswer } =
            questionsData;
          return (
            <div key={`questions-list${id}`}>
              <h1>{question}</h1>
              <p>{possibleAnswers.toString()}</p>
              <p>{correctAnswer}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default QuestionsPage;
