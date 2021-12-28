import type { NextPage } from "next";
import { InventoryContainer } from "../components/Container/InventoryContainer";

const InventoryPage: NextPage = () => {
  const name = "inventory";

  return (
    <div>
      <InventoryContainer name={name} />
    </div>
  );
};

export default InventoryPage;
