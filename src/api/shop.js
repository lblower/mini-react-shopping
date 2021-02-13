/**
 * Mocking client-server processing
 */
import axios from "axios";
import { receiveProducts } from "../actions";

const TIMEOUT = 100;

export const getProducts = async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  res.data.map((element) => (element["inventory"] = 10));
  dispatch(receiveProducts(res.data));
};

export default {
  getProducts,
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT)
};
