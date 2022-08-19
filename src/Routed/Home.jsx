//import TrendingItems from "../Components/TrendingItems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <nav>
        <Link to="/"> Homepage</Link>
        <Link to="/AllItems"> All Items</Link>
        <Link to="/Itemcategories/Electronics"> Electronics</Link>
        <Link to="/Itemcategories/Clothing"> Clothing</Link>
        <Link to="/Itemcategories/Household"> Household</Link>
      </nav>
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
