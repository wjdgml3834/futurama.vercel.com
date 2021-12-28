import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { InventoryCard } from "../components/Card/InventoryCard";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Inventory } from "../types/inventory";

const InventoryPage: NextPage = () => {
  const name = "inventory";
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Inventory</h1>
      <main>
        {data.map((inventoryData: Inventory) => {
          return (
            <div>
              <InventoryCard
                key={`inventory-list${inventoryData.id}`}
                inventoryData={inventoryData}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default InventoryPage;
