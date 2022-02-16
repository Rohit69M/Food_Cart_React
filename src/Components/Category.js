import React, { useContext } from "react";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProductContext from "../Shopping-Context/ProductContext";

const Category = (props) => {
  const { data } = useContext(ProductContext);
  const { setProductByCategory } = data;

  const history = useHistory();
  const handleChange = () => {
    setProductByCategory(props.id);
    const category = props.name.split(" ");
    history.push(`/products/${category[0]}`);
  };

  return (
    <section className="category">
      <Button handleChange={handleChange} key={props.id}>
        {props.name}
      </Button>
    </section>
  );
};

export default Category;
