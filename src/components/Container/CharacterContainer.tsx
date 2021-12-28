import { Error, Loading, CharacterCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Character } from "../../types/character";

interface CharacterContainerProps {
  name: string;
}

export const CharacterContainer = ({ name }: CharacterContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Character</h1>
      <main>
        {data.map((characterData: Character) => {
          return (
            <CharacterCard
              key={`character-list-${characterData.id}`}
              characterData={characterData}
            />
          );
        })}
      </main>
    </div>
  );
};
