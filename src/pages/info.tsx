import type { NextPage } from "next";
import { InfoContainer } from "../components/Container/InfoContainer";

const InfoPage: NextPage = () => {
  const name = "info";

  return (
    <div>
      <InfoContainer name={name} />
    </div>
  );
};

export default InfoPage;
