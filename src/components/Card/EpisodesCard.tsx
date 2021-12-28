import { Episodes } from "../../types/episodes";

interface EpisodesProps {
  episodesData: Episodes;
}

export const EpisodesCard = ({ episodesData }: EpisodesProps) => {
  const { number, title, originalAirDate, desc, id } = episodesData;

  return (
    <div>
      <h1>{title}</h1>
      <p>{number}</p>
      <p>{originalAirDate}</p>
      <p>{desc}</p>
    </div>
  );
};
