import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Cast } from "../types/cast";

const CastPage: NextPage = () => {
  const { data, error } = useFuturamaData("cast");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Cast</h1>
      <main>
        {data.map((castData: Cast) => {
          const { name, born, bio, id } = castData;
          return (
            <div key={`cast-list${id}`}>
              <h1>{name}</h1>
              <p>{born}</p>
              <a href={bio.url}>Detail</a>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default CastPage;
