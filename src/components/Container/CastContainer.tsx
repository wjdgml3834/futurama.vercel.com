import { Error, Loading, CastCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Cast } from "../../types/cast";

interface CastContainerProps {
  name: string;
}

export const CastContainer = ({ name }: CastContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Cast</h1>
      <main>
        {data.map((castData: Cast) => {
          return (
            <CastCard key={`cast-list-${castData.id}`} castData={castData} />
          );
        })}
      </main>
    </div>
  );
};
