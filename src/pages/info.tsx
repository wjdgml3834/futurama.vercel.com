import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { InfoCard } from "../components/Card/InfoCard";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Info } from "../types/info";

const InfoPage: NextPage = () => {
  const name = "info";
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Info</h1>
      <main>
        {data.map((infoData: Info) => {
          return (
            <div>
              <InfoCard key={`info-list${infoData.id}`} infoData={infoData} />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default InfoPage;
