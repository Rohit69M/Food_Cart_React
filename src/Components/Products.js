import React, { useContext, useState } from "react";
import Category from "./Category";
import DisplayProduct from "./DisplayProduct";
import ProductContext from "../Shopping-Context/ProductContext";
import CategoryDropdown from "./CategoryDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Products(props) {
  const [categoryDropDown, setCategoryDropDown] = useState("");
  const { data } = useContext(ProductContext);
  const { productCategory, allProducts, setProductByCategory } = data;

  const history = useHistory();
  const setProduct = (e) => {
    const selectedCategory = e.target.value;
    setCategoryDropDown(selectedCategory);
    const category = selectedCategory.split(" ");
    const findId = productCategory.find((id) => id.name === e.target.value);
    setProductByCategory(findId.id);
    history.push(`/products/${category[0]}`);
  };

  return (
    <main className="Products_container">
      <aside className="Category_container">
        {productCategory.map((cat) => {
          return <Category key={cat.id} name={cat.name} id={cat.id} />;
        })}
      </aside>
      <div className="showproduct_container">
        <div className="dropdown_cat">
          <select className="product_cat" onChange={setProduct}>
            {productCategory.map((cat) => {
              return (
                <CategoryDropdown
                  key={cat.id}
                  name={cat.name}
                  id={cat.id}
                  setCategoryDropDown={setCategoryDropDown}
                />
              );
            })}
          </select>
        </div>
        <section className="products_grid">
          {allProducts.map((product) => {
            return <DisplayProduct key={product.id} {...product} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Products;
