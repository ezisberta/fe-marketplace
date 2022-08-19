export function GetTrendingItems() {
  const pValue = 1 + Math.floor(Math.random() * 3);

  return fetch(
    `https://nc-marketplace-1.herokuapp.com/api/items?p=${pValue}&limit=10`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
}

export function GetAllItems() {
  return fetch(`https://nc-marketplace-1.herokuapp.com/api/items`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.items);
      // console.log(
      //   data.items.map((item) => {
      //     return item.category_name;
      //   })
      // );
      return data.items;
    });
}
