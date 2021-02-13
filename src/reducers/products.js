import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  GET_ALL_PRODUCTS
} from "../constants/ActionTypes";

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        loading: false,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };

    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product) => product.id);
    default:
      return state;
  }
};

const productLoading = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, loading: true };
    case RECEIVE_PRODUCTS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
  productLoading
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));

export const productsLoaded = (state) => state.productLoading.loading;
