import React from "react";
import "../main.scss";

//import { connect } from "react-redux";
//import { toggleCartHidden } from "./cart.actions.js";

//const ShopIcon = ({ toggleCartHidden }) => {
const ShopIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden}>
      <h3> 0 </h3>
    </div>
  );
};

//constMapDispatchToProps = (dispatch) => ({
//  toggleCartHidden: () => dispatch(toggleCartHidden()),
//});

export default ShopIcon;
// export default connect(null, mapDispatchToProps)(ShopIcon);
