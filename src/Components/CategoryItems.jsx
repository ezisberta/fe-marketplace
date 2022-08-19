import * as React from "react";
import { Link } from "react-router-dom";
export default function CategoryItems({ categoryItemData, category }) {
  return (
    <>
      <header className="allItemList-header">{category}</header>
      <div className="itemList-section">
        {categoryItemData.map(({ item_name, img_url, price, item_id }) => {
          return (
            <div key={item_name} className="itemList-item">
              <Link to={`/Allitems/${item_id}`}>
                <img
                  className="itemListimage"
                  src={img_url}
                  alt={item_name}
                ></img>
              </Link>
              <div className="itemList-text">
                <h3 className="itemListname">{item_name}</h3>
                <h4 className="itemListprice">£{price}</h4>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
