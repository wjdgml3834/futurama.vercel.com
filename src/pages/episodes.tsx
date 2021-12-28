import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { EpisodesCard } from "../components/Card/EpisodesCard";
import { useFuturamaData } from "../hooks/useFuturamaData";

import { Episodes } from "../types/episodes";

const EpisodesPage: NextPage = () => {
  const { data, error } = useFuturamaData("episodes");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Episodes</h1>
      <main>
        {data.map((episodesData: Episodes) => {
          return (
            <div>
              <EpisodesCard
                key={`episodes-list-${episodesData.id}`}
                episodesData={episodesData}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default EpisodesPage;
