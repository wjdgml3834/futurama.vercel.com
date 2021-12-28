import { Inventory } from "../../types/inventory";

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price, stock, id } =
    inventoryData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </div>
  );
};
