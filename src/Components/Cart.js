import React, { useContext } from "react";
import { VscClose } from "react-icons/vsc";
import fruits from "../static/images/category/fruits.png";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import lowestPrice from "../static/images/lowest-price.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import ProductContext from "../Shopping-Context/ProductContext";
import Button from "./Button";
import { RiArrowRightSLine } from "react-icons/ri";

const Cart = () => {
  const history = useHistory();
  const { data } = useContext(ProductContext);
  const { cart, decreaseQuantity, increaseQuantity, Loading, total } = data;

  return (
    <main key={cart.id} className="Cart_container">
      <section className="Cart_header">
        <h3>My Cart {cart.length}</h3>
        <span>
          <VscClose />
        </span>
      </section>
      {cart.length > 0 ? (
        cart.map((cart, index) => {
          return (
            <section key={cart.id} className="cart_section">
              <img src={cart.imageURL} />
              <div className="cart_22">
                <h3>{cart.name}</h3>
                <div className="cart_details">
                  <span className="icon_minus">
                    <VscChromeMinimize
                      onClick={() => {
                        decreaseQuantity(cart.id);
                      }}
                    />
                  </span>
                  <p>{cart.quantity}</p>
                  <span className="icon_add">
                    <VscAdd
                      onClick={() => {
                        increaseQuantity(cart.id);
                      }}
                    />
                  </span>
                  <span className="icon_cross">
                    <VscClose />
                  </span>
                  <p>{cart.price}</p>
                  <p>={cart.quantity * cart.price}</p>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="Cart_noitem">
          <h1>No items in your cart</h1>
          <p>Your favourite items are just a click away</p>
          <Link to="/">Start Shopping</Link>
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div className="cart_dis">
            <img src={lowestPrice} alt="dis" />
            <p>You won't find it cheaper anywhere</p>
          </div>
          <div className="cart_footer">
            <p>Promo code can be applied on payment page</p>
            <div>
              <p>Proceed To Checkout</p>
              <p>
                {total} <RiArrowRightSLine className="right_arrow" />
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
