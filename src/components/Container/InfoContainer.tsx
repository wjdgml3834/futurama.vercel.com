import { Error, Loading, InfoCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Info } from "../../types/info";

interface InfoContainerProps {
  name: string;
}

export const InfoContainer = ({ name }: InfoContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Info</h1>
      <main>
        {data.map((infoData: Info) => {
          return (
            <InfoCard key={`info-list${infoData.id}`} infoData={infoData} />
          );
        })}
      </main>
    </div>
  );
};
