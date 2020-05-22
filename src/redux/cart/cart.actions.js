import CartActionTypes from "./cart.types";

// payload is only optional. not gonna be used here.
export const setCartOpen = () => ({
  type: CartActionTypes.SET_CART_OPEN,
});

// item here represent an item that we are about to add
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});
