import React from "react";
import "../main.scss";

const CartDropdown = () => {
  return (
    <div className="cart">
      <div className="flex-between" style={{ paddingBottom: "6px" }}>
        <h3>Item name</h3>
        <div className="pink"> 33 czk</div>
      </div>

      <div className="flex-between" style={{ paddingBottom: "6px" }}>
        <h3>Item name</h3>
        <div className="pink"> 33 czk</div>
      </div>

      <div className="cart-cont">
        <div className="flex-between" style={{ paddingBottom: "6px" }}>
          <h3>Item name</h3>
          <div className="pink"> 33 czk</div>
        </div>
        <img
          className="contain"
          style={{ height: "70px" }}
          src="https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg"
        />
      </div>
      <div className="cart-cont">
        <div className="flex-between" style={{ paddingBottom: "6px" }}>
          <h3>Item name</h3>
          <div className="pink"> 33 czk</div>
        </div>
        <img
          className="contain"
          style={{ height: "70px" }}
          src="https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg"
        />
      </div>
      <button className="button-black">Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
