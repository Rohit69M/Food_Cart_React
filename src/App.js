import "./styles/styles.scss";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Fruits_Vegetables from "./Pages/Categories/Fruits_Vegetables";
import Bakery_Cakes from "./Pages/Categories/Bakery_Cakes";
import Beauty_Hygiene from "./Pages/Categories/Beauty_Hygiene";
import Baby_Care from "./Pages/Categories/Baby_Care";
import Beverages from "./Pages/Categories/Beverages";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/SignIn">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/products/Fruits">
            <Products />
          </Route>
          <Route path="/products/Bakery">
            <Products />
          </Route>
          <Route path="/products/Beverages">
            <Products />
          </Route>
          <Route path="/products/Beauty">
            <Products />
          </Route>
          <Route path="/products/Baby">
            <Products />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
