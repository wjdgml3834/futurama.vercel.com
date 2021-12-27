import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Character } from "../types/character";

const CharacterPage: NextPage = () => {
  const { data, error } = useFuturamaData("characters");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Character</h1>
      <main>
        {data.map((characterData: Character) => {
          const { id, age, images, species, sayings } = characterData;
          return (
            <div key={`character-list${id}`}>
              <img src={images.main} alt="" />
              <h1>{age}</h1>
              <p>{species}</p>
              <p>{sayings[0]}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default CharacterPage;
