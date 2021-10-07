import React from "react";

export const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <div>
      <li className="collection-item ">
        {name}
        <i
          className="material-icons basket-quantity"
          onClick={() => decQuantity(id)}
        >
          remove
        </i>
        х{quantity}
        <i
          className="material-icons basket-quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>
        = {price * quantity} руб.
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">close</i>
        </span>
      </li>
    </div>
  );
};
