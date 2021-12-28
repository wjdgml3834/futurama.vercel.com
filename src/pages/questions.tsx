import type { NextPage } from "next";
import { QuestionsContainer } from "../components/Container/QuestionsContainer";

const QuestionsPage: NextPage = () => {
  const name = "questions";

  return (
    <div>
      <QuestionsContainer name={name} />
    </div>
  );
};

export default QuestionsPage;
