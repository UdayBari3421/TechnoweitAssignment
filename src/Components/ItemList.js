import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredItems } from "../Store/ItemSlice";
import Item from "./Item";

const ItemList = React.memo(() => {
  const filteredItems = useSelector(selectFilteredItems);

  return (
    <div className="list">
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
});

export default ItemList;
