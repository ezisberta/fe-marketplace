import { useEffect, useState } from "react";
import { GetItemsByCategory } from "../Api";
import CategoryItems from "../Components/CategoryItems";

export default function ItemCategories() {
  const [categoryItemData, setCategoryItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetItemsByCategory().then((data) => {
      setCategoryItemData(data);
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
              <CategoryItems categoryItemData={categoryItemData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
