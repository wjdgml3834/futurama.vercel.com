import type { NextPage } from "next";
import { CharacterContainer } from "../components";

const CharacterPage: NextPage = () => {
  const name = "characters";

  return (
    <div>
      <CharacterContainer name={name} />
    </div>
  );
};

export default CharacterPage;
