import * as React from "react";

export default function ItemTile({ itemData }) {
  return (
    <>
      <header className="trendingitems-header">Trending Items</header>
      <div className="itemtiles-section">
        {itemData.map(({ item_name, img_url, price }) => {
          return (
            <div key={item_name}>
              <h3 className="itemtile-name">{item_name}</h3>
              <img
                className="itemtile-image"
                src={img_url}
                alt={item_name}
              ></img>
              <h4 className="itemtile-price">£{price}</h4>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
