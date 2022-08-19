//import AllItemsElement from "../Components/AllItemsElement";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllItems } from "../Api";
import AllItemsList from "../Components/AllItemsList";
export default function AllItems() {
  const [allItemData, setAllItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetAllItems().then((data) => {
      setAllItemData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Our Marketplace</h1>
      </header>
      <div>
        <nav>
          <Link to="/"> Homepage</Link>
          <Link to="/AllItems"> All Items</Link>
          <Link to="/Itemcategories/Electronics"> Electronics</Link>
          <Link to="/Itemcategories/Clothing"> Clothing</Link>
          <Link to="/Itemcategories/Household"> Household</Link>
        </nav>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <>
            <div>
              <AllItemsList allItemData={allItemData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
