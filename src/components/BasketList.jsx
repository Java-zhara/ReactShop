import React from "react";
import { BasketItem } from "./BasketItem";

export const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div>
      <ul className="collection basket-list">
        <li className="collection-item active indigo lighten-2">Корзина</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              {...item}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          ))
        ) : (
          <li className="collection-item ">Корзина пуста</li>
        )}
        <li className="collection-item active indigo lighten-2">
          Общая стоимость: {totalPrice} руб.
        </li>
        <li className="collection-item btn-save">
          <button className="btn indigo lighten-2">Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
};
