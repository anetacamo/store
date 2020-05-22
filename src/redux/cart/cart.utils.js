export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...item, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, item) => {
  const itemToDeduct = cartItems.find((cartItem) => cartItem.id === item.id);
  if (itemToDeduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const deleteItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
