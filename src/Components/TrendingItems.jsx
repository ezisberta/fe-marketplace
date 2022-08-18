import { useEffect, useState } from "react";
import { GetTrendingItems } from "../Api";
import ItemTile from "./Itemtile";

export default function TrendingItems() {
  const [itemData, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetTrendingItems().then((data) => {
      setItemData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <div>
            <ItemTile itemData={itemData} />
          </div>
        </>
      )}
    </div>
  );
}
