import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProvider from "../src/Shopping-Context/ProductProvider";

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById("root")
);
