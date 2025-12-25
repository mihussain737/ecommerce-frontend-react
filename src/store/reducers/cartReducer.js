const intialState = {
  cart: [],
  totalPrice: 0,
  cartId: null,
};

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const productToAdd = action.payload;
      console.log(state, "here state");
      const existingProduct = state.cart.find(
        (item) => item.productId === productToAdd.productId
      );

      if (existingProduct) {
        const updatedCart = state.cart.map((item) => {
          if (item.productId == productToAdd.productId) {
            return item;
          } else {
            return item;
          }
        });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCart = [...state.cart, productToAdd];
        return {
          ...state,
          cart: newCart,
        };
      }
    case "REMOVE_CART":
        return{
          ...state,
          cart:state.cart.filter(
            (item)=>item.productId!==action.payload.productId
          ),
        };
    default:
      return state;
  }
  return state;
};