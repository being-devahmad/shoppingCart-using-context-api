import React from "react";
import { useShop } from "../store/context";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useShop();

  if (!cart || cart.length === 0) {
    return <h1>Cart is empty</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-4 d-flex justify-content-around p-3 mb-3"
              >
                <img
                  src={item.image}
                  style={{ width: "50px", height: "50px" }}
                />
                <div>{item.title.slice(0, 20)}</div>
                <div>${item.price}</div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-dark"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <NavLink to={"/"} className="btn btn-dark mt-3">
            Continue shopping
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Cart;
