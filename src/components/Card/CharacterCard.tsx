import { Character } from "../../types/character";

interface CharacterProps {
  characterData: Character;
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
  const { id, age, images, species, sayings } = characterData;

  return (
    <div>
      <img src={images.main} alt="" />
      <h1>{age}</h1>
      <p>{species}</p>
      <p>{sayings[0]}</p>
    </div>
  );
};
