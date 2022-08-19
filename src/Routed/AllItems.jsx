//import AllItemsElement from "../Components/AllItemsElement";
import { useEffect, useState } from "react";
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
