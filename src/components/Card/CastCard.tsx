import { Cast } from "../../types/cast";

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
  const { name, born, bio, id } = castData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{born}</p>
      <a href={bio.url}>Detail</a>
    </div>
  );
};
