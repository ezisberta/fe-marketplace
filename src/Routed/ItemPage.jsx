import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllItems } from "../Api";
import SingleItem from "../Components/SingleItem";

export default function ItemPage() {
  const { id } = useParams();

  const [itemData, setItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetAllItems().then((data) => {
      console.log(id);
      const filteredItem = data.filter((item) => {
        return item.item_id === +id;
      });

      setItemData(filteredItem[0]);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      <div>
        {isLoading ? (
          <h3>Loading Page</h3>
        ) : (
          <>
            <div>
              <SingleItem itemData={itemData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
