import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { CharacterCard } from "../components/Card/CharacterCard";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Character } from "../types/character";

const CharacterPage: NextPage = () => {
  const name = "characters";
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Character</h1>
      <main>
        {data.map((characterData: Character) => {
          return (
            <div>
              <CharacterCard
                key={`character-list-${characterData.id}`}
                characterData={characterData}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default CharacterPage;
