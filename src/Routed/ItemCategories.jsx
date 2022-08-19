import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GetAllItems } from "../Api";
import CategoryItems from "../Components/CategoryItems";

export default function ItemCategories() {
  const { category } = useParams();

  const [categoryItemData, setCategoryItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetAllItems().then((data) => {
      const filteredCategory = data.filter((item) => {
        return item.category_name === category;
      });

      setCategoryItemData(filteredCategory);
      setIsLoading(false);
    });
  }, [category]);

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
              <CategoryItems
                categoryItemData={categoryItemData}
                category={category}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
