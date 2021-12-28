import { Info } from "../../types/info";

interface InfoProps {
  infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { synopsis, yearsAired, creators, id } = infoData;

  return (
    <div>
      <h1>{yearsAired}</h1>
      <p>{synopsis}</p>
    </div>
  );
};
