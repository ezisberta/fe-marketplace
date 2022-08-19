import { Link } from "react-router-dom";

export default function SingleItem({ itemData }) {
  return (
    <>
      <nav>
        <Link to="/"> Homepage</Link>
        <Link to="/AllItems"> All Items</Link>
        <Link to={`/Itemcategories/${itemData.category_name}`}>
          {`Explore more ${itemData.category_name}`}
        </Link>
      </nav>
      <h3>{itemData.item_name}</h3>
      <p>SKU: NCMK{itemData.item_id}</p>
      <img src={itemData.img_url} alt={itemData.item_name} />
      <p>£{itemData.price}</p>
      <p>Description: {itemData.description}</p>
    </>
  );
}
