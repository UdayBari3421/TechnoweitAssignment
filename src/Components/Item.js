import React from "react";

const Item = React.memo(({ item }) => {
  const { title, description, price, rating } = item; // Destructure the relevant fields

  return (
    <div className="list-item">
      <h2>{title}</h2>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
    </div>
  );
});

export default Item;
