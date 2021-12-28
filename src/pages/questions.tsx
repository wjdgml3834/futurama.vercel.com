import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { QuestionsCard } from "../components/Card/QuestionsCard";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Questions } from "../types/questions";

const QuestionsPage: NextPage = () => {
  const name = "questions";
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Questions</h1>
      <main>
        {data.map((questionsData: Questions) => {
          return (
            <div>
              <QuestionsCard
                key={`questions-list-${questionsData.id}`}
                questionsData={questionsData}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default QuestionsPage;
