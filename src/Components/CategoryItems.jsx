import * as React from "react";

export default function CategoryItems({ categoryItemData }) {
  return (
    <>
      <header className="allItemList-header">All Items</header>
      <div className="itemList-section">
        {categoryItemData.map(({ item_name, img_url, price }) => {
          return (
            <div key={item_name} className="itemList-item">
              <img
                className="itemListimage"
                src={img_url}
                alt={item_name}
              ></img>
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
