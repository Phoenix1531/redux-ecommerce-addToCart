const initialState = {
  cart: [],
  product: [],
};
export const reducer = (storeData = initialState, action) => {
  if (action.type == "ADD_TO_CART") {
    return {
      ...storeData,
      cart: [...storeData.cart, action.payload],
    };
  }
  if (action.type == "FETCH_DATA_SUCCESS") {
    return {
      ...storeData,
      product: action.payload,
    };
  }
  return storeData;
};
