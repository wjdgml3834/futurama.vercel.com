import { Error, Loading, EpisodesCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/episodes";

interface EpisodesContainerProps {
  name: string;
}

export const EpisodesContainer = ({ name }: EpisodesContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Episodes</h1>
      <main>
        {data.map((episodesData: Episodes) => {
          return (
            <EpisodesCard
              key={`episodes-list-${episodesData.id}`}
              episodesData={episodesData}
            />
          );
        })}
      </main>
    </div>
  );
};
