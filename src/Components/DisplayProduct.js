import React, { useContext } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProductContext from "../Shopping-Context/ProductContext";

const DisplayProduct = (props) => {
  const history = useHistory();
  const { name, description, imageURL, price } = props;
  const { data } = useContext(ProductContext);
  const { addToCart } = data;

  const handleAddToCart = () => {
    addToCart(props.id);
  };

  return (
    <main className="Display_Product">
      <section className="product_content">
        <h3>{name}</h3>
        <img src={imageURL} alt="kiwi" />
        <p>{description.slice(0, 120) + "..."}</p>
        <div className="product_price">
          <Button handleChange={handleAddToCart}>
            Buy Now @ MRP Rs.{price}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default DisplayProduct;
