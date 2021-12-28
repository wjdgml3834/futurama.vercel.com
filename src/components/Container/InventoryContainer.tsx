import { Error, Loading, InventoryCard } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types/inventory";

interface InventoryContainerProps {
  name: string;
}

export const InventoryContainer = ({ name }: InventoryContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Inventory</h1>
      <main>
        {data.map((inventoryData: Inventory) => {
          return (
            <InventoryCard
              key={`inventory-list${inventoryData.id}`}
              inventoryData={inventoryData}
            />
          );
        })}
      </main>
    </div>
  );
};
