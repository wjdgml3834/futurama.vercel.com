import styled from "@emotion/styled";
import { Error, Loading, CharacterCard } from "..";
import { MEDIA_QUERY_END_POINT } from "../../constants/index";
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
      <CharacterCardContainer>
        {data.map((characterData: Character) => {
          return (
            <CharacterCard
              key={`character-list-${characterData.id}`}
              characterData={characterData}
            />
          );
        })}
      </CharacterCardContainer>
    </div>
  );
};

const CharacterCardContainer = styled.main`

display: grid;
gap: 1em;
@media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}){
  grid-template-columns: repeat(2,1fr)
}
@media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}){
  grid-template-columns: repeat(4,1fr)

`;
