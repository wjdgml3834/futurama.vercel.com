import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { CastCard } from "../components/Card/CastCard";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Cast } from "../types/cast";

const CastPage: NextPage = () => {
  const name = "cast";
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Cast</h1>
      <main>
        {data.map((castData: Cast) => {
          return (
            <div>
              <CastCard key={`cast-list-${castData.id}`} castData={castData} />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default CastPage;
