import { url } from "inspector";
import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Info } from "../types/info";

const InfoPage: NextPage = () => {
  const { data, error } = useFuturamaData("info");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Info</h1>
      <main>
        {data.map((infoData: Info) => {
          const { synopsis, yearsAired, creators, id } = infoData;
          return (
            <div key={`info-list${id}`}>
              <h1>{yearsAired}</h1>
              <p>{synopsis}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default InfoPage;
