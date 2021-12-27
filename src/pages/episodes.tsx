import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Episodes } from "../types/episodes";

const EpisodesPage: NextPage = () => {
  const { data, error } = useFuturamaData("episodes");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Episodes</h1>
      <main>
        {data.map((episodesData: Episodes) => {
          const { number, title, originalAirDate, desc, id } = episodesData;
          return (
            <div key={`episodes-list${id}`}>
              <h1>{title}</h1>
              <p>{number}</p>
              <p>{originalAirDate}</p>
              <p>{desc}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default EpisodesPage;
