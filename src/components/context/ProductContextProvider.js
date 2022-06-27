import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

export const context = createContext();
export const useProductContext = () => {
  return useContext(context);
};
const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const API = "http://localhost:8002/products";

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
      };
    case "GET_ONEPRODUCT":
      return {
        ...state,
        objForEdit: action.payload.data,
      };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async (obj) => {
    try {
      await axios.post(API, obj);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const delProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const idForEdit = async (id) => {
    try {
      let res = await axios.get(`${API}/${id}`);
      dispatch({
        type: "GET_ONEPRODUCT",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveProduct = async (obj) => {
    try {
      await axios.patch(`${API}/${obj.id}`, obj);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <context.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        getProducts,
        addProduct,
        delProduct,
        idForEdit,
        saveProduct,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ProductContextProvider;
