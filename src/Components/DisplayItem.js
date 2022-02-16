import React, { useContext } from "react";
import offer1 from "../static/images/category/fruits.png";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProductContext from "../Shopping-Context/ProductContext";

const DisplayItem = (props) => {
  const { data } = useContext(ProductContext);
  const { productCategory, setProductByCategory } = data;
  const { name, description, imageUrl, id, order } = props;
  const history = useHistory();

  const handleExploreChange = () => {
    setProductByCategory(props.id);
    const category = props.name.split(" ");
    history.push(`/products/${category[0]}`);
  };

  if (order % 2 == 0) {
    return (
      <>
        <main className="enable">
          <img src={imageUrl} alt="offer1" />
          <section className="contentLeft">
            <h3>{name}</h3>
            <p>{description}</p>
            <Button handleChange={handleExploreChange}> Explore {name}</Button>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="Display_conatiner">
        <img src={imageUrl} alt="offer1" />
        <div className="content">
          <h3>{name}</h3>
          <p>{description}</p>
          <Button handleChange={handleExploreChange}> Explore {name}</Button>
        </div>
      </div>
    </>
  );
};

export default DisplayItem;
