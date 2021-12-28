import type { NextPage } from "next";
import { EpisodesContainer } from "../components/Container/EpisodesContainer";

const EpisodesPage: NextPage = () => {
  const name = "episodes";

  return (
    <div>
      <EpisodesContainer name={name} />
    </div>
  );
};

export default EpisodesPage;
