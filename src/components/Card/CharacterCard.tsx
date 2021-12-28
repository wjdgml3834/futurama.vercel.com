import styled from "@emotion/styled";
import { Character } from "../../types/character";

interface CharacterProps {
  characterData: Character;
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
  const { id, age, images, species, sayings } = characterData;

  return (
    <Container>
      <img src={images.main} alt="" />
      <h1>{age}</h1>
      <p>{species}</p>
      <p>{sayings[0]}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
