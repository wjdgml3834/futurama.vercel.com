import { Error, Loading, QuestionsCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Questions } from "../../types/questions";

interface QuestionsContainerProps {
  name: string;
}

export const QuestionsContainer = ({ name }: QuestionsContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Questions</h1>
      <main>
        {data.map((questionsData: Questions) => {
          return (
            <QuestionsCard
              key={`questions-list-${questionsData.id}`}
              questionsData={questionsData}
            />
          );
        })}
      </main>
    </div>
  );
};
