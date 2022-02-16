import React, { useContext } from "react";
import logo from "../static/images/logo_2x.png";
import { Link } from "react-router-dom";
import cartLogo from "../static/images/cart.svg";
import ProductContext from "../Shopping-Context/ProductContext";

function Header() {
  const { data } = useContext(ProductContext);
  const { productAll, cart } = data;
  const handleClick = () => {
    productAll();
  };
  return (
    <header className="Header_container">
      <nav className="Header_container-nav">
        <img src={logo} />
        <div className="Header_container-nav-links">
          <Link to="/">Home</Link>
          <Link onClick={handleClick} to="/products">
            Product
          </Link>
        </div>
      </nav>

      <section className="Header_container-cart">
        <div className="Header_container-cart-links">
          <Link to="/SignIn">SignIn</Link>
          <Link to="/Register">Register</Link>
        </div>

        <Link to="/Cart" className="Header_container-cart-logo">
          <img src={cartLogo} />
          <span>{cart.length} items</span>
        </Link>
      </section>
    </header>
  );
}

export default Header;
