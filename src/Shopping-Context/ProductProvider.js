import ProductContext from "./ProductContext";
import React, { useEffect, useReducer, useCallback, useState } from "react";
import {
  SET_CATEGORY,
  SET_ALL_PRODUCT,
  SET_PRODUCT_BY_CATEGORY,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOADING,
  TOTAL,
} from "./ActionTypes";
import categories from "../server/categories/index.get.json";
import allprod from "../server/products/index.get.json";

const initialState = {
  productCategory: [],
  allProducts: [],
  Loading: false,
  cart: [],
  total: 0,
};

const productReducer = (state, action) => {
  if (action.type === LOADING) {
    return { ...state, Loading: action.payload };
  }

  if (action.type === SET_CATEGORY) {
    const allCategory = categories.map((cat) => cat);
    return { ...state, productCategory: allCategory };
  }
  if (action.type === SET_ALL_PRODUCT) {
    const products = allprod.map((pro) => pro);
    return { ...state, allProducts: products };
  }

  if (action.type === SET_PRODUCT_BY_CATEGORY) {
    const setProduct = allprod.filter((pro) => pro.category === action.payload);
    return { ...state, allProducts: setProduct };
  }

  if (action.type === ADD_TO_CART) {
    const findProduct = state.cart.find((pro) => pro.id === action.payload);
    if (findProduct) {
      return { ...state, cart: [...state.cart] };
    }
    const setProduct = allprod.find((pro) => pro.id === action.payload);
    const updateWithQuantity = { ...setProduct, quantity: 1 };
    return { ...state, cart: [...state.cart, updateWithQuantity] };
  }

  if (action.type === INCREASE_QUANTITY) {
    const findProductIndex = state.cart.findIndex(
      (pro) => pro.id === action.payload
    );
    const findProduct = state.cart[findProductIndex];
    let update = {
      ...findProduct,
      quantity: findProduct.quantity + 1,
    };
    const cartData = [...state.cart];
    cartData[findProductIndex] = update;
    return { ...state, cart: cartData };
  }

  if (action.type === DECREASE_QUANTITY) {
    const findProductIndex = state.cart.findIndex(
      (pro) => pro.id === action.payload
    );
    const findProduct = state.cart[findProductIndex];
    if (findProduct.quantity < 2) {
      const removeproduct = state.cart.filter(
        (cart) => cart.id !== findProduct.id
      );
      return { ...state, cart: removeproduct };
    }
    let update = {
      ...findProduct,
      quantity: findProduct.quantity - 1,
    };
    const cartData = [...state.cart];
    cartData[findProductIndex] = update;
    return { ...state, cart: cartData };
  }

  if (action.type === TOTAL) {
    const total = state.cart.reduce((prev, cart) => {
      const total_Price = prev + cart.quantity * cart.price;
      return total_Price;
    }, 0);

    return { ...state, total: total };
  }
  return initialState;
};

const ProductProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    initialState
  );

  const productHomeCategory = () => {
    dispatchProductAction({ type: SET_CATEGORY });
  };

  const productAll = () => {
    dispatchProductAction({ type: SET_ALL_PRODUCT });
  };

  const setProductByCategory = (id) => {
    dispatchProductAction({ type: SET_PRODUCT_BY_CATEGORY, payload: id });
  };

  const addToCart = (id) => {
    dispatchProductAction({ type: ADD_TO_CART, payload: id });
  };

  const increaseQuantity = (id) => {
    dispatchProductAction({ type: INCREASE_QUANTITY, payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatchProductAction({ type: DECREASE_QUANTITY, payload: id });
  };

  const calculateTotal = useCallback(() => {
    dispatchProductAction({ type: TOTAL });
  }, [productState.cart]);

  useEffect(() => {
    productHomeCategory();
  }, []);
  useEffect(() => {
    productAll();
  }, []);
  useEffect(() => {
    calculateTotal();
  }, [productState.cart, calculateTotal]);

  const data = {
    productCategory: productState.productCategory,
    allProducts: productState.allProducts,
    Loading: productState.Loading,
    cart: productState.cart,
    total: productState.total,
    currentUser: currentUser,
    setProductByCategory: setProductByCategory,
    productAll: productAll,
    addToCart: addToCart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity: decreaseQuantity,
  };

  return (
    <ProductContext.Provider value={{ data }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
