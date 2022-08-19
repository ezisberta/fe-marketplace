//import TrendingItems from "../Components/TrendingItems";
import { useEffect, useState } from "react";
import { GetTrendingItems } from "../Api";
import ItemTile from "../Components/Itemtile";

export default function HomePage() {
  const [itemData, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetTrendingItems().then((data) => {
      setItemData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Our Marketplace</h1>
      </header>
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
    </>
  );
}
