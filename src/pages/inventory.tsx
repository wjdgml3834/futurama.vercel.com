import type { NextPage } from "next";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { Inventory } from "../types/inventory";

const InventoryPage: NextPage = () => {
  const { data, error } = useFuturamaData("inventory");
  if (error) return <div>Failed to Loading</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Inventory</h1>
      <main>
        {data.map((inventoryData: Inventory) => {
          const { title, category, description, slogan, price, stock, id } =
            inventoryData;
          return (
            <div key={`inventory-list${id}`}>
              <h1>{title}</h1>
              <p>{category}</p>
              <p>{description}</p>
              <p>{slogan}</p>
              <p>{price}</p>
              <p>{stock}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default InventoryPage;
