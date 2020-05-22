import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cartOpen: false,
  cartItems: [],
};

//if state is ever unset, it will fetch the previously defined INITIAL_STATE
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_OPEN:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
