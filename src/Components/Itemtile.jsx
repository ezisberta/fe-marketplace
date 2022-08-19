import * as React from "react";
import { Link } from "react-router-dom";

export default function ItemTile({ itemData }) {
  return (
    <>
      <header className="trendingitems-header">Trending Items</header>
      <div className="itemtiles-section">
        {itemData.map(({ item_name, img_url, price, item_id }) => {
          return (
            <div key={item_name}>
              <h3 className="itemtile-name">{item_name}</h3>
              <Link to={`/Allitems/${item_id}`}>
                <img
                  className="itemtile-image"
                  src={img_url}
                  alt={item_name}
                  Electronics
                ></img>
              </Link>
              <h4 className="itemtile-price">£{price}</h4>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
